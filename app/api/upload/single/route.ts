import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_KEY_ID, R2_BUCKET_NAME } =
  process.env;

const param: any = {
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_KEY_ID,
  },
};

const R2 = new S3Client(param);

async function streamToString(
  stream: ReadableStream<Uint8Array> | null
): Promise<string> {
  if (stream === null) {
    throw new Error("Stream is null");
  }

  const reader = stream.getReader();
  let result = "";
  let read = await reader.read();
  while (!read.done) {
    // Assuming the stream is UTF-8 encoded
    result += new TextDecoder("utf-8").decode(read.value);
    read = await reader.read();
  }
  return result;
}

export async function PUT(req: NextRequest, res: NextResponse) {
  const bodyStream: ReadableStream<Uint8Array> | null = req.body;
  let fileName = "test.png";
  await streamToString(bodyStream)
    .then((bodyString) => {
      fileName = JSON.parse(bodyString)?.filename;
    })
    .catch((error) => {
      console.error("Error converting stream to string:", error);
    });

  const signedUrl = await getSignedUrl(
    R2,
    new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: fileName,
    }),
    { expiresIn: 3600 }
  );
  // Construct the response object as expected by Uppy
  const response = {
    url: signedUrl,
    method: "PUT",
    fields: {}, // Empty as we are not using form fields
    headers: {
      "Content-Type": "image/png", // Adjust based on your requirements
    },
  };
  return NextResponse.json(response);
}
