package com.agrinexus.mobile

import android.webkit.JavascriptInterface
import org.json.JSONObject

class NativeBridge(private val controller: NexusNativeController) {
    @JavascriptInterface
    fun postMessage(message: String) {
        val payload = runCatching { JSONObject(message) }.getOrNull() ?: return
        when (payload.optString("command")) {
            "permissions.request" -> controller.requestNativePermissions()
            "wake.start" -> controller.startWakeRuntime()
            "wake.stop" -> controller.stopWakeRuntime()
            "voice.stop" -> controller.stopSpeech()
            "voice.state" -> controller.onWebVoiceState(payload.optJSONObject("payload") ?: payload)
        }
    }
}

