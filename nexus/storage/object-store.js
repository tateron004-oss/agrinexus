"use strict";

const crypto = require("node:crypto");
const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand, HeadObjectCommand } = require("@aws-sdk/client-s3");

function required(value, label) { if (!value) throw new Error(`${label} is required`); return value; }
function safeSegment(value) { return String(value).replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 160); }
function normalizeS3Endpoint(value) {
  if (!value) return undefined;
  const trimmed = String(value).trim().replace(/^(["'])(.*)\1$/, "$2").trim();
  if (!trimmed) return undefined;
  const candidate = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  const parsed = new URL(candidate);
  if (!/^https?:$/.test(parsed.protocol) || !parsed.hostname) throw new Error("S3_ENDPOINT must be an HTTP(S) endpoint");
  return parsed.toString().replace(/\/$/, "");
}

class S3ObjectStore {
  constructor({ bucket, region, endpoint, accessKeyId, secretAccessKey, forcePathStyle = true, client } = {}) {
    this.bucket = required(bucket, "S3_BUCKET");
    this.client = client || new S3Client({
      region: required(region, "S3_REGION"), endpoint: normalizeS3Endpoint(endpoint), forcePathStyle,
      credentials: { accessKeyId: required(accessKeyId, "S3_ACCESS_KEY_ID"), secretAccessKey: required(secretAccessKey, "S3_SECRET_ACCESS_KEY") }
    });
  }
  key({ tenantId, ownerId, artifactId, filename = "artifact" }) {
    return ["nexus", safeSegment(tenantId), safeSegment(ownerId), safeSegment(artifactId), safeSegment(filename)].join("/");
  }
  async put({ key, body, contentType, metadata = {} }) {
    const bytes = Buffer.isBuffer(body) ? body : Buffer.from(body);
    const checksum = crypto.createHash("sha256").update(bytes).digest("hex");
    await this.client.send(new PutObjectCommand({ Bucket: this.bucket, Key: key, Body: bytes, ContentType: contentType || "application/octet-stream",
      Metadata: Object.fromEntries(Object.entries(metadata).map(([name, value]) => [safeSegment(name).toLowerCase(), String(value)])) }));
    return { key, checksum, sizeBytes: bytes.length };
  }
  async get(key) {
    const result = await this.client.send(new GetObjectCommand({ Bucket: this.bucket, Key: key }));
    return { body: Buffer.from(await result.Body.transformToByteArray()), contentType: result.ContentType || "application/octet-stream", sizeBytes: result.ContentLength };
  }
  async head(key) { return this.client.send(new HeadObjectCommand({ Bucket: this.bucket, Key: key })); }
  async remove(key) { await this.client.send(new DeleteObjectCommand({ Bucket: this.bucket, Key: key })); return true; }
}

function createObjectStore(env = process.env, options = {}) {
  const requiredKeys = ["S3_BUCKET", "S3_REGION", "S3_ACCESS_KEY_ID", "S3_SECRET_ACCESS_KEY"];
  const missing = requiredKeys.filter(key => !env[key]);
  if (missing.length) {
    return null;
  }
  return new S3ObjectStore({ bucket: env.S3_BUCKET, region: env.S3_REGION, endpoint: env.S3_ENDPOINT,
    accessKeyId: env.S3_ACCESS_KEY_ID, secretAccessKey: env.S3_SECRET_ACCESS_KEY,
    forcePathStyle: String(env.S3_FORCE_PATH_STYLE || "true").toLowerCase() !== "false", client: options.client });
}

module.exports = Object.freeze({ S3ObjectStore, createObjectStore, normalizeS3Endpoint });
