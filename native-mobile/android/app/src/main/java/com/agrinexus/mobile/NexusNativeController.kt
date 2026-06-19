package com.agrinexus.mobile

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.speech.tts.TextToSpeech
import android.webkit.WebView
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import org.json.JSONObject
import java.util.Locale

class NexusNativeController(private val activity: Activity, private val webView: WebView) {
    private var tts: TextToSpeech? = null
    private val appUrl = "https://agrinexus-platform.onrender.com"

    fun load() {
        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        webView.addJavascriptInterface(NativeBridge(this), "AndroidAgriNexus")
        webView.loadUrl(appUrl)
        tts = TextToSpeech(activity) { status ->
            if (status == TextToSpeech.SUCCESS) tts?.language = Locale.US
        }
    }

    fun requestNativePermissions() {
        val permissions = mutableListOf(
            Manifest.permission.RECORD_AUDIO,
            Manifest.permission.CAMERA,
            Manifest.permission.ACCESS_FINE_LOCATION
        )
        if (Build.VERSION.SDK_INT >= 33) permissions.add(Manifest.permission.POST_NOTIFICATIONS)
        val missing = permissions.filter {
            ContextCompat.checkSelfPermission(activity, it) != PackageManager.PERMISSION_GRANTED
        }
        if (missing.isNotEmpty()) {
            ActivityCompat.requestPermissions(activity, missing.toTypedArray(), 8104)
        } else {
            registerPermissions()
        }
    }

    fun registerPermissions() {
        val payload = JSONObject()
            .put("device", JSONObject().put("platform", "android").put("appVersion", "1.0.0"))
            .put("wakeMode", "always-on-foreground-service")
            .put("permissions", JSONObject()
                .put("microphone", "granted")
                .put("speechRecognition", "granted")
                .put("backgroundAudio", "granted")
                .put("notifications", "granted")
                .put("geolocation", "foreground")
                .put("backgroundLocation", "optional")
                .put("camera", "granted")
                .put("secureStorage", "granted"))
            .put("runtime", JSONObject()
                .put("voiceGate", "wake-phrase")
                .put("followUpWindowSeconds", 12)
                .put("realtimeProvider", "openai-realtime-webrtc")
                .put("fallback", "native-speech-recognizer"))
            .put("privacyControls", JSONObject()
                .put("visibleListeningIndicator", true)
                .put("oneTapOff", true)
                .put("wakeAuditEnabled", true))

        fetchNativeRuntime(payload)
        sendToWeb("voice.permission_changed", JSONObject().put("permission", "native").put("status", "granted"))
    }

    fun startWakeRuntime() {
        requestNativePermissions()
        ContextCompat.startForegroundService(activity, Intent(activity, NexusVoiceService::class.java))
        sendToWeb("voice.always_on_started", JSONObject().put("wakeMode", "foreground"))
    }

    fun stopWakeRuntime() {
        activity.stopService(Intent(activity, NexusVoiceService::class.java))
        sendToWeb("voice.always_on_stopped", JSONObject())
    }

    fun stopSpeech() {
        tts?.stop()
        sendToWeb("voice.interrupt", JSONObject())
    }

    fun startRealtimeVoiceRuntime() {
        sendToWeb("voice.realtime_started", JSONObject()
            .put("provider", "openai-realtime-webrtc")
            .put("transport", "native-webview-webrtc")
            .put("fallback", "native-speech-recognizer"))
    }

    fun stopRealtimeVoiceRuntime() {
        sendToWeb("voice.realtime_stopped", JSONObject()
            .put("provider", "openai-realtime-webrtc"))
    }

    fun startRouteTracking() {
        sendToWeb("location.route_update", JSONObject()
            .put("source", "native-location-permission")
            .put("status", "ready")
            .put("message", "Native GPS route tracking is ready when location permission is granted."))
    }

    fun prepareCameraCapture() {
        sendToWeb("camera.capture_ready", JSONObject()
            .put("source", "native-camera-permission")
            .put("status", "ready")
            .put("message", "Native camera capture is ready for crop, injury, pharmacy, or provider handoff media."))
    }

    fun speak(text: String) {
        tts?.speak(text, TextToSpeech.QUEUE_FLUSH, null, "nexus-response")
    }

    fun onWebVoiceState(payload: JSONObject) {
        if (payload.optString("state") == "speaking") sendToWeb("voice.playback_started", payload)
    }

    fun sendTranscript(transcript: String, language: String = "en", confidence: Double = 0.9) {
        sendToWeb("voice.final_transcript", JSONObject()
            .put("transcript", transcript)
            .put("language", language)
            .put("confidence", confidence))
    }

    fun sendPartial(transcript: String, language: String = "en") {
        sendToWeb("voice.partial_transcript", JSONObject()
            .put("transcript", transcript)
            .put("language", language))
    }

    private fun fetchNativeRuntime(payload: JSONObject) {
        Thread {
            runCatching {
                val url = java.net.URL("$appUrl/api/native/voice-runtime")
                val conn = url.openConnection() as java.net.HttpURLConnection
                conn.requestMethod = "POST"
                conn.setRequestProperty("Content-Type", "application/json")
                conn.doOutput = true
                conn.outputStream.use { it.write(payload.toString().toByteArray()) }
                conn.inputStream.close()
                conn.disconnect()
            }
        }.start()
    }

    private fun sendToWeb(type: String, data: JSONObject) {
        val envelope = JSONObject(data.toString()).put("type", type)
        activity.runOnUiThread {
            webView.evaluateJavascript("window.AgriNexusNativeBridge && window.AgriNexusNativeBridge.receive($envelope);", null)
        }
    }
}
