package com.agrinexus.mobile

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.Service
import android.content.Intent
import android.os.Build
import android.os.IBinder
import android.speech.RecognitionListener
import android.speech.RecognizerIntent
import android.speech.SpeechRecognizer

class NexusVoiceService : Service(), RecognitionListener {
    companion object {
        const val ACTION_TRANSCRIPT = "com.agrinexus.mobile.VOICE_TRANSCRIPT"
    }

    private var recognizer: SpeechRecognizer? = null
    private var waitingForCommand = false
    private var lastWakeAt = 0L
    private val followUpWindowMs = 12_000L
    private val wakePhrases = listOf("hey agrinexus", "hey nexus", "good morning nexus", "agrinexus", "nexus", "agri")

    override fun onCreate() {
        super.onCreate()
        startForeground(8104, notification())
        recognizer = SpeechRecognizer.createSpeechRecognizer(this).also {
            it.setRecognitionListener(this)
        }
        listen()
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        listen()
        return START_STICKY
    }

    private fun listen() {
        val intent = Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH)
            .putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM)
            .putExtra(RecognizerIntent.EXTRA_LANGUAGE, java.util.Locale.getDefault().toLanguageTag())
            .putExtra(RecognizerIntent.EXTRA_LANGUAGE_PREFERENCE, java.util.Locale.getDefault().toLanguageTag())
            .putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true)
            .putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 5)
        recognizer?.startListening(intent)
    }

    private fun notification(): Notification {
        val channelId = "agrinexus_voice"
        if (Build.VERSION.SDK_INT >= 26) {
            val channel = NotificationChannel(channelId, "Nexus Voice", NotificationManager.IMPORTANCE_LOW)
            getSystemService(NotificationManager::class.java).createNotificationChannel(channel)
        }
        return Notification.Builder(this, channelId)
            .setContentTitle("AgriNexus is listening")
            .setContentText("Say Nexus, Hey Nexus, Agri, or Hey AgriNexus. Tap the app to stop.")
            .setSmallIcon(android.R.drawable.ic_btn_speak_now)
            .build()
    }

    override fun onPartialResults(partialResults: android.os.Bundle?) {
        val transcript = partialResults
            ?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)
            ?.firstOrNull()
            .orEmpty()
        val routed = routeTranscript(transcript, false) ?: return
        if (routed.isNotBlank()) broadcastTranscript(routed, false)
    }

    override fun onResults(results: android.os.Bundle?) {
        val transcript = results
            ?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)
            ?.firstOrNull()
            .orEmpty()
        val routed = routeTranscript(transcript, true)
        if (!routed.isNullOrBlank()) broadcastTranscript(routed, true)
        listen()
    }

    override fun onError(error: Int) { listen() }
    override fun onReadyForSpeech(params: android.os.Bundle?) {}
    override fun onBeginningOfSpeech() {}
    override fun onRmsChanged(rmsdB: Float) {}
    override fun onBufferReceived(buffer: ByteArray?) {}
    override fun onEndOfSpeech() {}
    override fun onEvent(eventType: Int, params: android.os.Bundle?) {}
    override fun onBind(intent: Intent?): IBinder? = null

    private fun routeTranscript(transcript: String, final: Boolean): String? {
        val clean = transcript.trim()
        if (clean.isBlank()) return null
        val lower = clean.lowercase()
        val wake = wakePhrases.firstOrNull { phrase ->
            lower == phrase || lower.startsWith("$phrase ") || lower.contains(" $phrase ")
        }
        val now = System.currentTimeMillis()
        if (wake != null) {
            waitingForCommand = true
            lastWakeAt = now
            val command = clean.replace(Regex("(?i)\\b${Regex.escape(wake)}\\b"), "").trim(' ', ',', '.', ':', ';')
            return if (command.isBlank()) "Nexus" else command
        }
        val inFollowUp = waitingForCommand && now - lastWakeAt <= followUpWindowMs
        if (!inFollowUp) return null
        if (final) waitingForCommand = false
        return clean
    }

    private fun broadcastTranscript(transcript: String, final: Boolean) {
        sendBroadcast(Intent(ACTION_TRANSCRIPT)
            .putExtra("transcript", transcript)
            .putExtra("language", java.util.Locale.getDefault().language.ifBlank { "en" })
            .putExtra("confidence", if (final) 0.88 else 0.55)
            .putExtra("final", final))
    }

    override fun onDestroy() {
        recognizer?.destroy()
        recognizer = null
        super.onDestroy()
    }
}
