import AVFoundation
import Speech
import WebKit

final class NexusVoiceRuntime: NSObject, SFSpeechRecognizerDelegate {
    weak var webView: WKWebView?
    private var recognizer = SFSpeechRecognizer(locale: Locale(identifier: "en-US"))
    private var localeIdentifier = "en-US"
    private let audioEngine = AVAudioEngine()
    private var request: SFSpeechAudioBufferRecognitionRequest?
    private var task: SFSpeechRecognitionTask?
    private let synthesizer = AVSpeechSynthesizer()
    private let wakePhrases = ["hey agrinexus", "hey nexus", "good morning nexus", "agrinexus", "nexus", "agri"]
    private var waitingForCommand = false
    private var lastWakeAt = Date.distantPast
    private let followUpWindow: TimeInterval = 12

    func start() {
        stop()
        recognizer = SFSpeechRecognizer(locale: Locale(identifier: localeIdentifier))
        try? AVAudioSession.sharedInstance().setCategory(.playAndRecord, mode: .spokenAudio, options: [.duckOthers, .defaultToSpeaker])
        try? AVAudioSession.sharedInstance().setActive(true)
        let request = SFSpeechAudioBufferRecognitionRequest()
        request.shouldReportPartialResults = true
        self.request = request
        let input = audioEngine.inputNode
        let format = input.outputFormat(forBus: 0)
        input.removeTap(onBus: 0)
        input.installTap(onBus: 0, bufferSize: 1024, format: format) { [weak self] buffer, _ in
            self?.request?.append(buffer)
        }
        audioEngine.prepare()
        try? audioEngine.start()
        task = recognizer?.recognitionTask(with: request) { [weak self] result, error in
            guard let self else { return }
            if let text = result?.bestTranscription.formattedString, !text.isEmpty {
                if let routed = self.routeTranscript(text, final: result?.isFinal == true) {
                    if result?.isFinal == true {
                        self.send(type: "voice.final_transcript", data: ["transcript": routed, "language": self.localeIdentifier, "confidence": 0.9])
                    } else {
                        self.send(type: "voice.partial_transcript", data: ["transcript": routed, "language": self.localeIdentifier])
                    }
                } else {
                    self.send(type: "voice.clarify", data: ["reason": "waiting_for_wake_phrase"])
                }
            }
            if error != nil || result?.isFinal == true {
                self.restartSoon()
            }
        }
        send(type: "voice.always_on_started", data: ["wakeMode": "foreground"])
    }

    func stop() {
        audioEngine.stop()
        audioEngine.inputNode.removeTap(onBus: 0)
        request?.endAudio()
        task?.cancel()
        request = nil
        task = nil
        send(type: "voice.always_on_stopped", data: [:])
    }

    func stopSpeech() {
        synthesizer.stopSpeaking(at: .immediate)
        send(type: "voice.interrupt", data: [:])
    }

    func speak(_ text: String, language: String = "en-US") {
        let utterance = AVSpeechUtterance(string: text)
        utterance.voice = AVSpeechSynthesisVoice(language: language)
        synthesizer.speak(utterance)
    }

    func updateLanguage(_ language: String) {
        localeIdentifier = Self.nativeLocaleIdentifier(language)
    }

    func send(type: String, data: [String: Any]) {
        var envelope = data
        envelope["type"] = type
        guard let json = try? JSONSerialization.data(withJSONObject: envelope),
              let string = String(data: json, encoding: .utf8) else { return }
        DispatchQueue.main.async {
            self.webView?.evaluateJavaScript("window.AgriNexusNativeBridge && window.AgriNexusNativeBridge.receive(\(string));")
        }
    }

    private func routeTranscript(_ transcript: String, final: Bool) -> String? {
        let clean = transcript.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !clean.isEmpty else { return nil }
        let lower = clean.lowercased()
        if let wake = wakePhrases.first(where: { lower == $0 || lower.hasPrefix("\($0) ") || lower.contains(" \($0) ") }) {
            waitingForCommand = true
            lastWakeAt = Date()
            let pattern = "\\b\(NSRegularExpression.escapedPattern(for: wake))\\b"
            let command = clean.replacingOccurrences(of: pattern, with: "", options: [.regularExpression, .caseInsensitive])
                .trimmingCharacters(in: CharacterSet(charactersIn: " ,.:;"))
            return command.isEmpty ? "Nexus" : command
        }
        guard waitingForCommand, Date().timeIntervalSince(lastWakeAt) <= followUpWindow else { return nil }
        if final { waitingForCommand = false }
        return clean
    }

    private func restartSoon() {
        stop()
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.35) { self.start() }
    }

    private static func nativeLocaleIdentifier(_ language: String) -> String {
        let code = language.replacingOccurrences(of: "_", with: "-").lowercased().split(separator: "-").first.map(String.init) ?? ""
        switch code {
        case "es": return "es-ES"
        case "fr": return "fr-FR"
        case "sw": return "sw-KE"
        case "ar": return "ar-EG"
        case "pt": return "pt-BR"
        default: return "en-US"
        }
    }
}
