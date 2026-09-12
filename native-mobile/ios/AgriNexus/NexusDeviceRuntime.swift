import CoreLocation
import UIKit
import UniformTypeIdentifiers
import UserNotifications

final class NexusDeviceRuntime: NSObject, CLLocationManagerDelegate, UIImagePickerControllerDelegate, UINavigationControllerDelegate, UIDocumentPickerDelegate {
    weak var host: UIViewController?
    weak var voiceRuntime: NexusVoiceRuntime?
    private let locationManager = CLLocationManager()
    private let pendingKey = "nexus.native.pending-events"

    override init() {
        super.init(); locationManager.delegate = self
        NotificationCenter.default.addObserver(self, selector:#selector(pushToken(_:)), name:.nexusPushToken, object:nil)
        NotificationCenter.default.addObserver(self, selector:#selector(pushFailure(_:)), name:.nexusPushFailure, object:nil)
        NotificationCenter.default.addObserver(self, selector:#selector(pushOpened(_:)), name:.nexusPushOpened, object:nil)
    }

    deinit { NotificationCenter.default.removeObserver(self) }

    func startLocation() {
        guard CLLocationManager.locationServicesEnabled() else { emit("location.route_update", ["status":"unavailable","reason":"location-services-disabled"]); return }
        locationManager.requestWhenInUseAuthorization()
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.distanceFilter = 5
        locationManager.startUpdatingLocation()
    }

    func stopLocation() { locationManager.stopUpdatingLocation(); emit("location.route_stopped", ["status":"stopped"]) }

    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard let location = locations.last else { return }
        emit("location.route_update", ["status":"observed","source":"core-location","latitude":location.coordinate.latitude,
            "longitude":location.coordinate.longitude,"accuracyMeters":location.horizontalAccuracy,
            "speedMetersPerSecond":location.speed,"bearingDegrees":location.course,
            "observedAt":Int(location.timestamp.timeIntervalSince1970 * 1000)])
    }
    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        emit("location.route_update", ["status":"failed","reason":String(describing:type(of:error))])
    }

    func captureCamera() {
        guard UIImagePickerController.isSourceTypeAvailable(.camera) else { emit("camera.capture_failed", ["reason":"camera-unavailable"]); return }
        let picker = UIImagePickerController(); picker.sourceType = .camera; picker.delegate = self; host?.present(picker, animated: true)
    }
    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) { picker.dismiss(animated:true); emit("camera.capture_cancelled", ["status":"cancelled"]) }
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey:Any]) {
        picker.dismiss(animated:true)
        guard let image = info[.originalImage] as? UIImage, let data = image.jpegData(compressionQuality:0.86) else { emit("camera.capture_failed", ["reason":"camera-returned-no-media"]); return }
        emit("camera.media_attached", ["media":["type":"image/jpeg","size":data.count,"dataBase64":data.base64EncodedString()]])
    }

    func openFile() {
        let picker = UIDocumentPickerViewController(forOpeningContentTypes:[.item], asCopy:true); picker.delegate = self; host?.present(picker, animated:true)
    }
    func documentPickerWasCancelled(_ controller: UIDocumentPickerViewController) { emit("file.selection_cancelled", ["status":"cancelled"]) }
    func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentsAt urls: [URL]) {
        guard let url = urls.first else { emit("file.selection_failed", ["reason":"file-missing"]); return }
        let scoped = url.startAccessingSecurityScopedResource(); defer { if scoped { url.stopAccessingSecurityScopedResource() } }
        do {
            let values = try url.resourceValues(forKeys:[.fileSizeKey,.contentTypeKey])
            guard (values.fileSize ?? 0) <= 10_000_000 else { emit("file.selection_failed", ["reason":"file-too-large","maxBytes":10_000_000]); return }
            let data = try Data(contentsOf:url, options:.mappedIfSafe)
            guard data.count <= 10_000_000 else { emit("file.selection_failed", ["reason":"file-too-large","maxBytes":10_000_000]); return }
            emit("file.attached", ["file":["name":url.lastPathComponent,"type":values.contentType?.preferredMIMEType ?? "application/octet-stream",
                "size":data.count,"dataBase64":data.base64EncodedString()]])
        } catch { emit("file.selection_failed", ["reason":"file-read-failed"]) }
    }

    func scheduleNotification(_ payload: [String:Any]) {
        let content = UNMutableNotificationContent(); content.title = String((payload["title"] as? String ?? "Nexus reminder").prefix(120))
        content.body = String((payload["body"] as? String ?? "A Nexus task is ready for your review.").prefix(500)); content.sound = .default
        let epoch = payload["scheduledAtEpochMs"] as? Double ?? (Date().timeIntervalSince1970 * 1000 + 60_000)
        let interval = max(1, epoch / 1000 - Date().timeIntervalSince1970)
        let identifier = payload["requestId"] as? String ?? UUID().uuidString
        UNUserNotificationCenter.current().add(UNNotificationRequest(identifier:identifier, content:content,
            trigger:UNTimeIntervalNotificationTrigger(timeInterval:interval,repeats:false))) { [weak self] error in
            self?.emit(error == nil ? "notification.scheduled" : "notification.schedule_failed",
                error == nil ? ["status":"scheduled","requestId":identifier,"scheduledAtEpochMs":epoch] : ["status":"failed","reason":"notification-center-error"])
        }
    }

    func registerRemotePush() {
        UNUserNotificationCenter.current().requestAuthorization(options:[.alert,.badge,.sound]) { granted, _ in
            DispatchQueue.main.async { if granted { UIApplication.shared.registerForRemoteNotifications() } }
            self.emit("push.registration_requested", ["status":granted ? "requested" : "denied","simulated":false])
        }
    }

    @objc private func pushToken(_ notification: Notification) {
        emit("push.token_registered", ["status":"registered","provider":notification.userInfo?["provider"] as? String ?? "apns",
            "token":notification.userInfo?["token"] as? String ?? "","simulated":false])
    }
    @objc private func pushFailure(_ notification: Notification) {
        emit("push.registration_unavailable", ["status":"unavailable",
            "reason":notification.userInfo?["reason"] as? String ?? "apns-registration-failed","simulated":false])
    }
    @objc private func pushOpened(_ notification: Notification) {
        emit("notification.opened", ["provider":"apns","payload":notification.userInfo?["payload"] as? [String:Any] ?? [:]])
    }

    func lifecycle(_ state: String) { emit("app.\(state)", ["occurredAt":Int(Date().timeIntervalSince1970 * 1000)]) }
    func flushPending() {
        let pending = UserDefaults.standard.array(forKey:pendingKey) as? [[String:Any]] ?? []
        UserDefaults.standard.removeObject(forKey:pendingKey)
        pending.forEach { voiceRuntime?.send(type:$0["type"] as? String ?? "native.event", data:$0.filter { $0.key != "type" }) }
        voiceRuntime?.send(type:"offline.queue_flushed", data:["count":pending.count])
    }

    private func emit(_ type: String, _ data: [String:Any]) {
        if UIApplication.shared.applicationState == .active { voiceRuntime?.send(type:type,data:data); return }
        var envelope = data; envelope["type"] = type
        var pending = UserDefaults.standard.array(forKey:pendingKey) as? [[String:Any]] ?? []
        if pending.count >= 100 { pending.removeFirst() }; pending.append(envelope); UserDefaults.standard.set(pending,forKey:pendingKey)
    }
}
