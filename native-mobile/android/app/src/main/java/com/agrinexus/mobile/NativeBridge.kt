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
            "voice.realtime.start" -> controller.startRealtimeVoiceRuntime()
            "voice.realtime.stop" -> controller.stopRealtimeVoiceRuntime()
            "route.track" -> controller.startRouteTracking()
            "camera.capture" -> controller.prepareCameraCapture()
            "call.launch" -> controller.launchConfirmedCall(payload.optJSONObject("payload") ?: JSONObject())
            "voice.state" -> controller.onWebVoiceState(payload.optJSONObject("payload") ?: payload)
        }
    }
}
