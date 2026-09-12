package com.agrinexus.mobile

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.os.Build
import androidx.core.app.NotificationCompat

class NexusNotificationReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        val channelId = "nexus_tasks"
        val manager = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        if (Build.VERSION.SDK_INT >= 26) manager.createNotificationChannel(NotificationChannel(channelId, "Nexus tasks", NotificationManager.IMPORTANCE_DEFAULT))
        val requestId = intent.getIntExtra("requestId", 8108)
        val open = PendingIntent.getActivity(context, requestId, Intent(context, MainActivity::class.java)
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP), PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE)
        val notification = NotificationCompat.Builder(context, channelId)
            .setSmallIcon(android.R.drawable.ic_dialog_info).setContentTitle(intent.getStringExtra("title") ?: "Nexus reminder")
            .setContentText(intent.getStringExtra("body") ?: "A Nexus task is ready for review.")
            .setAutoCancel(true).setContentIntent(open).build()
        manager.notify(requestId, notification)
    }
}
