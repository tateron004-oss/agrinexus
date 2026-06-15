import AVFoundation
import Speech
import UIKit
import WebKit

final class NexusWebViewController: UIViewController, WKScriptMessageHandler {
    private let appURL = URL(string: "https://agrinexus-platform.onrender.com")!
    private var webView: WKWebView!
    private let voiceRuntime = NexusVoiceRuntime()

    override func viewDidLoad() {
        super.viewDidLoad()
        let controller = WKUserContentController()
        controller.add(self, name: "agrinexusNative")
        let config = WKWebViewConfiguration()
        config.userContentController = controller
        webView = WKWebView(frame: view.bounds, configuration: config)
        webView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        view.addSubview(webView)
        voiceRuntime.webView = webView
        webView.load(URLRequest(url: appURL))
        requestNativePermissions()
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "agrinexusNative", let body = message.body as? [String: Any] else { return }
        let command = body["command"] as? String ?? ""
        switch command {
        case "permissions.request":
            requestNativePermissions()
        case "wake.start":
            voiceRuntime.start()
        case "wake.stop":
            voiceRuntime.stop()
        case "voice.stop":
            voiceRuntime.stopSpeech()
        default:
            break
        }
    }

    private func requestNativePermissions() {
        AVAudioSession.sharedInstance().requestRecordPermission { _ in }
        SFSpeechRecognizer.requestAuthorization { [weak self] _ in
            DispatchQueue.main.async { self?.registerNativePermissions() }
        }
    }

    private func registerNativePermissions() {
        let payload: [String: Any] = [
            "device": ["platform": "ios", "appVersion": "1.0.0"],
            "wakeMode": "foreground",
            "permissions": [
                "microphone": "granted",
                "speechRecognition": "granted",
                "backgroundAudio": "granted",
                "notifications": "prompt",
                "geolocation": "foreground",
                "camera": "granted",
                "secureStorage": "granted"
            ],
            "privacyControls": [
                "visibleListeningIndicator": true,
                "oneTapOff": true,
                "wakeAuditEnabled": true
            ]
        ]
        postRuntime(payload)
        voiceRuntime.send(type: "voice.permission_changed", data: ["permission": "native", "status": "granted"])
    }

    private func postRuntime(_ payload: [String: Any]) {
        guard let runtimeURL = URL(string: "/api/native/voice-runtime", relativeTo: appURL)?.absoluteURL else { return }
        var request = URLRequest(url: runtimeURL)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = try? JSONSerialization.data(withJSONObject: payload)
        URLSession.shared.dataTask(with: request).resume()
    }
}
