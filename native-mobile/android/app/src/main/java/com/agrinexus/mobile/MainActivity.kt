package com.agrinexus.mobile

import android.app.Activity
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.Build
import android.os.Bundle
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient

class MainActivity : Activity() {
    private lateinit var controller: NexusNativeController
    private val speechReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context?, intent: Intent?) {
            val transcript = intent?.getStringExtra("transcript").orEmpty()
            if (transcript.isBlank()) return
            if (intent?.getBooleanExtra("final", false) == true) {
                controller.sendTranscript(transcript, intent.getStringExtra("language") ?: "en", intent.getDoubleExtra("confidence", 0.88))
            } else {
                controller.sendPartial(transcript, intent?.getStringExtra("language") ?: "en")
            }
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val webView = WebView(this)
        setContentView(webView)
        webView.webViewClient = WebViewClient()
        webView.webChromeClient = WebChromeClient()
        controller = NexusNativeController(this, webView)
        controller.load()
    }

    override fun onResume() {
        super.onResume()
        val filter = IntentFilter(NexusVoiceService.ACTION_TRANSCRIPT)
        if (Build.VERSION.SDK_INT >= 33) registerReceiver(speechReceiver, filter, Context.RECEIVER_NOT_EXPORTED)
        else registerReceiver(speechReceiver, filter)
    }

    override fun onPause() {
        runCatching { unregisterReceiver(speechReceiver) }
        super.onPause()
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == 8104) controller.registerPermissions()
    }
}
