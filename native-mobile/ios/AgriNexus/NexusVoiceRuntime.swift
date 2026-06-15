import AVFoundation
import Speech
import WebKit

final class NexusVoiceRuntime: NSObject, SFSpeechRecognizerDelegate {
    weak var webView: WKWebView?
    private let recognizer = SFSpeechRecognizer(locale: Locale(identifier: "en-US"))
    private let audioEngine = AVAudioEngine()
    private var request: SFSpeechAudioBufferRecognitionRequest?
    private var task: SFSpeechRecognitionTask?
    private let synthesizer = AVSpeechSynthesizer()

    func start() {
        stop()
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
                if result?.isFinal == true {
                    self.send(type: "voice.final_transcript", data: ["transcript": text, "language": "en", "confidence": 0.9])
                } else {
                    self.send(type: "voice.partial_transcript", data: ["transcript": text, "language": "en"])
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

    func send(type: String, data: [String: Any]) {
        var envelope = data
        envelope["type"] = type
        guard let json = try? JSONSerialization.data(withJSONObject: envelope),
              let string = String(data: json, encoding: .utf8) else { return }
        DispatchQueue.main.async {
            self.webView?.evaluateJavaScript("window.AgriNexusNativeBridge && window.AgriNexusNativeBridge.receive(\(string));")
        }
    }

    private func restartSoon() {
        stop()
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.35) { self.start() }
    }
}

