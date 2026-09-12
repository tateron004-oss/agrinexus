package com.agrinexus.mobile

import android.Manifest
import android.app.Activity
import android.app.AlarmManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.location.Location
import android.location.LocationListener
import android.location.LocationManager
import android.os.Build
import android.provider.MediaStore
import android.provider.OpenableColumns
import android.util.Base64
import androidx.core.content.ContextCompat
import org.json.JSONObject
import java.io.ByteArrayOutputStream

class NexusDeviceRuntime(private val activity: Activity, private val emit: (String, JSONObject) -> Unit) {
    companion object { const val CAMERA_REQUEST = 8106; const val FILE_REQUEST = 8107 }
    private val locationManager = activity.getSystemService(Context.LOCATION_SERVICE) as LocationManager
    private var locationListener: LocationListener? = null

    fun startLocationTracking() {
        if (ContextCompat.checkSelfPermission(activity, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            emit("location.permission_required", JSONObject().put("status", "blocked"))
            return
        }
        stopLocationTracking()
        val listener = LocationListener { location -> emitLocation(location) }
        locationListener = listener
        val provider = when {
            locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER) -> LocationManager.GPS_PROVIDER
            locationManager.isProviderEnabled(LocationManager.NETWORK_PROVIDER) -> LocationManager.NETWORK_PROVIDER
            else -> ""
        }
        if (provider.isBlank()) {
            emit("location.route_update", JSONObject().put("status", "unavailable").put("reason", "location-provider-disabled"))
            return
        }
        runCatching {
            locationManager.getLastKnownLocation(provider)?.let(::emitLocation)
            locationManager.requestLocationUpdates(provider, 5_000L, 5f, listener)
        }.onFailure { emit("location.route_update", JSONObject().put("status", "failed").put("reason", it.javaClass.simpleName)) }
    }

    fun stopLocationTracking() {
        locationListener?.let { runCatching { locationManager.removeUpdates(it) } }
        locationListener = null
        emit("location.route_stopped", JSONObject().put("status", "stopped"))
    }

    private fun emitLocation(location: Location) {
        emit("location.route_update", JSONObject().put("status", "observed").put("source", location.provider)
            .put("latitude", location.latitude).put("longitude", location.longitude)
            .put("accuracyMeters", location.accuracy).put("speedMetersPerSecond", location.speed)
            .put("bearingDegrees", location.bearing).put("observedAt", location.time))
    }

    fun captureCamera() {
        if (ContextCompat.checkSelfPermission(activity, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            emit("camera.permission_required", JSONObject().put("status", "blocked")); return
        }
        val intent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
        if (intent.resolveActivity(activity.packageManager) == null) {
            emit("camera.capture_failed", JSONObject().put("reason", "camera-unavailable")); return
        }
        activity.startActivityForResult(intent, CAMERA_REQUEST)
    }

    fun openFile() {
        val intent = Intent(Intent.ACTION_OPEN_DOCUMENT).setType("*/*").addCategory(Intent.CATEGORY_OPENABLE)
        activity.startActivityForResult(intent, FILE_REQUEST)
    }

    fun handleActivityResult(requestCode: Int, resultCode: Int, data: Intent?): Boolean {
        if (requestCode == CAMERA_REQUEST) {
            if (resultCode != Activity.RESULT_OK) emit("camera.capture_cancelled", JSONObject().put("status", "cancelled"))
            else {
                val bitmap = data?.extras?.get("data") as? Bitmap
                if (bitmap == null) emit("camera.capture_failed", JSONObject().put("reason", "camera-returned-no-media"))
                else emitBitmap(bitmap)
            }
            return true
        }
        if (requestCode == FILE_REQUEST) {
            if (resultCode != Activity.RESULT_OK || data?.data == null) emit("file.selection_cancelled", JSONObject().put("status", "cancelled"))
            else emitFile(data.data!!)
            return true
        }
        return false
    }

    private fun emitBitmap(bitmap: Bitmap) {
        val output = ByteArrayOutputStream(); bitmap.compress(Bitmap.CompressFormat.JPEG, 86, output)
        val bytes = output.toByteArray()
        emit("camera.media_attached", JSONObject().put("media", JSONObject().put("type", "image/jpeg")
            .put("size", bytes.size).put("dataBase64", Base64.encodeToString(bytes, Base64.NO_WRAP))))
    }

    private fun emitFile(uri: android.net.Uri) {
        val metadata = JSONObject().put("uri", uri.toString()).put("type", activity.contentResolver.getType(uri) ?: "application/octet-stream")
        activity.contentResolver.query(uri, null, null, null, null)?.use { cursor ->
            if (cursor.moveToFirst()) {
                cursor.getColumnIndex(OpenableColumns.DISPLAY_NAME).takeIf { it >= 0 }?.let { metadata.put("name", cursor.getString(it)) }
                cursor.getColumnIndex(OpenableColumns.SIZE).takeIf { it >= 0 }?.let { metadata.put("size", cursor.getLong(it)) }
            }
        }
        val declaredSize = metadata.optLong("size", 0L)
        if (declaredSize > 10_000_000L) { emit("file.selection_failed", JSONObject().put("reason", "file-too-large").put("maxBytes", 10_000_000)); return }
        val bytes = activity.contentResolver.openInputStream(uri)?.use { input -> val output = java.io.ByteArrayOutputStream()
            val buffer = ByteArray(8192)
            while (output.size() < 10_000_001) {
                val count = input.read(buffer, 0, minOf(buffer.size, 10_000_001 - output.size()))
                if (count < 0) break
                if (count == 0) { val next = input.read(); if (next < 0) break; output.write(next) }
                else output.write(buffer, 0, count)
            }
            output.toByteArray() } ?: ByteArray(0)
        if (bytes.size > 10_000_000) { emit("file.selection_failed", JSONObject().put("reason", "file-too-large").put("maxBytes", 10_000_000)); return }
        metadata.put("dataBase64", Base64.encodeToString(bytes, Base64.NO_WRAP))
        emit("file.attached", JSONObject().put("file", metadata))
    }

    fun scheduleNotification(payload: JSONObject) {
        if (Build.VERSION.SDK_INT >= 33 && ContextCompat.checkSelfPermission(activity, Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
            emit("notification.permission_changed", JSONObject().put("status", "denied")); return
        }
        val title = payload.optString("title", "Nexus reminder").take(120)
        val body = payload.optString("body", "A Nexus task is ready for your review.").take(500)
        val at = maxOf(System.currentTimeMillis() + 1_000L, payload.optLong("scheduledAtEpochMs", System.currentTimeMillis() + 60_000L))
        val requestId = payload.optInt("requestId", (at % Int.MAX_VALUE).toInt())
        val intent = Intent(activity, NexusNotificationReceiver::class.java).putExtra("title", title).putExtra("body", body).putExtra("requestId", requestId)
        val pending = PendingIntent.getBroadcast(activity, requestId, intent, PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE)
        val alarm = activity.getSystemService(Context.ALARM_SERVICE) as AlarmManager
        alarm.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, at, pending)
        emit("notification.scheduled", JSONObject().put("status", "scheduled").put("scheduledAtEpochMs", at).put("requestId", requestId))
    }

    fun registerRemotePush() {
        emit("push.registration_unavailable", JSONObject().put("status", "unavailable")
            .put("reason", "native-push-provider-not-configured").put("simulated", false))
    }
}
