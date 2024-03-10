'use server'

import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto"
const generateFileName = (bytes = 16) => crypto.randomBytes(bytes).toString("hex")

const s3 = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }
})

export async function getSignedS3Url() {

  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: generateFileName(),
  })

  const signedURL = await getSignedUrl(s3, putObjectCommand, {
    expiresIn: 60,
  })

  return { success: { url: signedURL} }
}

export async function deleteS3Object(objectKey) {

  const deleteObjectCommand = new DeleteObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: objectKey,
  })

  try {
    const response = await s3.send(deleteObjectCommand);
    // console.log(response)
  } catch (err) {
    console.log(err)
  }
}