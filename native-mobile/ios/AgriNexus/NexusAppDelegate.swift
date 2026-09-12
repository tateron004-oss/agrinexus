import UIKit
import UserNotifications

extension Notification.Name {
    static let nexusPushToken = Notification.Name("nexus.push.token")
    static let nexusPushFailure = Notification.Name("nexus.push.failure")
    static let nexusPushOpened = Notification.Name("nexus.push.opened")
}

@main
final class NexusAppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate {
    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey:Any]? = nil) -> Bool {
        UNUserNotificationCenter.current().delegate = self
        let window = UIWindow(frame: UIScreen.main.bounds)
        window.rootViewController = NexusWebViewController()
        window.makeKeyAndVisible()
        self.window = window
        return true
    }

    func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
        let token = deviceToken.map { String(format:"%02x", $0) }.joined()
        NotificationCenter.default.post(name:.nexusPushToken, object:nil, userInfo:["token":token,"provider":"apns"])
    }

    func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
        NotificationCenter.default.post(name:.nexusPushFailure, object:nil,
            userInfo:["reason":String(describing:type(of:error)),"simulated":false])
    }

    func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable:Any],
        fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
        NotificationCenter.default.post(name:.nexusPushOpened, object:nil,
            userInfo:["payload":userInfo.reduce(into:[String:Any]()) { $0[String(describing:$1.key)] = $1.value }])
        completionHandler(.newData)
    }

    func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification,
        withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
        completionHandler([.banner,.sound,.badge])
    }
}
