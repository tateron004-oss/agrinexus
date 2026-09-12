package com.agrinexus.mobile

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import android.speech.tts.TextToSpeech
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import org.json.JSONObject
import java.util.Locale

class NexusNativeController(private val activity: Activity, private val webView: WebView) {
    private var tts: TextToSpeech? = null
    private val appUrl = "https://nexus-genesis-certified.onrender.com"
    private var selectedLanguageTag = "en-US"
    private var webReady = false
    private var appForeground = false
    private var pendingWakeStart = false
    private val eventStore = activity.getSharedPreferences("nexus-native-events", Activity.MODE_PRIVATE)
    private val deviceRuntime = NexusDeviceRuntime(activity, ::sendToWeb)

    fun load() {
        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        webView.settings.cacheMode = android.webkit.WebSettings.LOAD_CACHE_ELSE_NETWORK
        webView.addJavascriptInterface(NativeBridge(this), "AndroidAgriNexus")
        webView.webViewClient = object : WebViewClient() {
            override fun onPageFinished(view: WebView?, url: String?) { webReady = true; flushPendingEvents() }
        }
        webView.loadUrl(appUrl)
        tts = TextToSpeech(activity) { status ->
            if (status == TextToSpeech.SUCCESS) tts?.language = Locale.US
        }
    }

    fun requestNativePermissions(): Boolean {
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
            return false
        } else {
            registerPermissions()
            return true
        }
    }

    fun registerPermissions() {
        val payload = JSONObject()
            .put("device", JSONObject().put("platform", "android").put("appVersion", "1.0.0"))
            .put("wakeMode", "always-on-foreground-service")
            .put("permissions", JSONObject()
                .put("microphone", permissionState(Manifest.permission.RECORD_AUDIO))
                .put("speechRecognition", permissionState(Manifest.permission.RECORD_AUDIO))
                .put("backgroundAudio", permissionState(Manifest.permission.RECORD_AUDIO))
                .put("notifications", if (Build.VERSION.SDK_INT < 33) "granted" else permissionState(Manifest.permission.POST_NOTIFICATIONS))
                .put("geolocation", if (permissionGranted(Manifest.permission.ACCESS_FINE_LOCATION)) "foreground" else "denied")
                .put("backgroundLocation", "optional")
                .put("camera", permissionState(Manifest.permission.CAMERA))
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
        sendToWeb("voice.permission_changed", JSONObject().put("permission", "native")
            .put("status", if (permissionGranted(Manifest.permission.RECORD_AUDIO)) "granted" else "denied"))
    }

    fun startWakeRuntime() {
        pendingWakeStart = true
        if (!requestNativePermissions()) return
        launchWakeService()
    }

    fun onPermissionsResult() {
        registerPermissions()
        if (!pendingWakeStart) return
        if (permissionGranted(Manifest.permission.RECORD_AUDIO)) launchWakeService()
        else sendToWeb("voice.always_on_stopped", JSONObject().put("reason", "microphone-permission-denied"))
    }

    private fun launchWakeService() {
        pendingWakeStart = false
        ContextCompat.startForegroundService(activity, Intent(activity, NexusVoiceService::class.java)
            .putExtra("languageTag", selectedLanguageTag))
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
        deviceRuntime.startLocationTracking()
    }

    fun stopRouteTracking() = deviceRuntime.stopLocationTracking()

    fun prepareCameraCapture() {
        deviceRuntime.captureCamera()
    }

    fun openFilePicker() = deviceRuntime.openFile()
    fun scheduleNotification(payload: JSONObject) = deviceRuntime.scheduleNotification(payload)
    fun registerRemotePush() = deviceRuntime.registerRemotePush()
    fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?): Boolean = deviceRuntime.handleActivityResult(requestCode, resultCode, data)
    fun onForeground() { appForeground = true; sendToWeb("app.foreground", JSONObject().put("occurredAt", System.currentTimeMillis())); flushPendingEvents() }
    fun onBackground() { sendToWeb("app.background", JSONObject().put("occurredAt", System.currentTimeMillis())); appForeground = false }

    fun launchConfirmedCall(payload: JSONObject) {
        val provider = payload.optString("provider", "").trim()
        val source = payload.optString("source", "").trim()
        val confirmed = payload.optBoolean("executionConfirmed", false)
        val url = payload.optString("url", "").trim()
        val redactedPhone = payload.optString("redactedPhone", "").trim()
        if (provider != "native-phone" || source != "confirmed-call-handoff" || !confirmed) {
            sendCallLaunchFailed("unconfirmed-or-unsupported", redactedPhone)
            return
        }
        if (!isSafeTelUrl(url)) {
            sendCallLaunchFailed("malformed-tel-url", redactedPhone)
            return
        }
        val dialIntent = Intent(Intent.ACTION_DIAL, Uri.parse(url))
        val canDial = dialIntent.resolveActivity(activity.packageManager) != null
        if (!canDial) {
            sendCallLaunchFailed("dialer-unavailable", redactedPhone)
            return
        }
        activity.startActivity(dialIntent)
        sendToWeb("call.launch_opened", JSONObject()
            .put("provider", "native-phone")
            .put("source", "confirmed-call-handoff")
            .put("redactedPhone", redactedPhone)
            .put("status", "dialer-opened"))
    }

    fun speak(text: String) {
        tts?.speak(text, TextToSpeech.QUEUE_FLUSH, null, "nexus-response")
    }

    fun onWebVoiceState(payload: JSONObject) {
        val language = payload.optString("locale", payload.optString("language", "")).trim()
        if (language.isNotBlank()) selectedLanguageTag = nativeLocaleTag(language)
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

    private fun isSafeTelUrl(url: String): Boolean {
        if (!url.startsWith("tel:")) return false
        val number = url.removePrefix("tel:").trim()
        if (number.isBlank()) return false
        return Regex("^\\+?[0-9][0-9\\s().-]{2,31}$").matches(number)
    }

    private fun sendCallLaunchFailed(reason: String, redactedPhone: String = "") {
        sendToWeb("call.launch_failed", JSONObject()
            .put("provider", "native-phone")
            .put("source", "confirmed-call-handoff")
            .put("reason", reason)
            .put("redactedPhone", redactedPhone)
            .put("status", "blocked"))
    }

    private fun nativeLocaleTag(language: String): String {
        val code = language.replace("_", "-").lowercase().split("-").firstOrNull().orEmpty()
        return when (code) {
            "es" -> "es-ES"
            "fr" -> "fr-FR"
            "sw" -> "sw-KE"
            "ar" -> "ar-EG"
            "pt" -> "pt-BR"
            else -> "en-US"
        }
    }

    private fun permissionGranted(permission: String) = ContextCompat.checkSelfPermission(activity, permission) == PackageManager.PERMISSION_GRANTED
    private fun permissionState(permission: String) = if (permissionGranted(permission)) "granted" else "denied"

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

    fun flushPendingEvents() {
        if (!webReady) return
        val pending = org.json.JSONArray(eventStore.getString("pending", "[]"))
        eventStore.edit().remove("pending").apply()
        for (index in 0 until pending.length()) evaluateEnvelope(pending.getJSONObject(index))
        evaluateEnvelope(JSONObject().put("type", "offline.queue_flushed").put("count", pending.length()))
    }

    private fun sendToWeb(type: String, data: JSONObject) {
        val envelope = JSONObject(data.toString()).put("type", type)
        if (!webReady || !appForeground) {
            val pending = org.json.JSONArray(eventStore.getString("pending", "[]"))
            if (pending.length() >= 100) pending.remove(0)
            pending.put(envelope)
            eventStore.edit().putString("pending", pending.toString()).apply()
            return
        }
        evaluateEnvelope(envelope)
    }

    private fun evaluateEnvelope(envelope: JSONObject) {
        activity.runOnUiThread {
            webView.evaluateJavascript("window.AgriNexusNativeBridge && window.AgriNexusNativeBridge.receive($envelope);", null)
        }
    }
}
