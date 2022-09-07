import { json, UploadHandler } from '@remix-run/node';
import type { PutObjectCommandInput } from '@aws-sdk/client-s3';
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const uploadStreamToS3 = async (fieldName: string, data: AsyncIterable<Uint8Array>, fileName: string, contentType: string) => {
  const DIR = "remixmantine";
  fileName = fieldName.replace('.', '/')+'.'+fileName;
  const key = "/"+DIR+"/"+fileName;

  const s3Client = new S3Client({ 
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT,
    version: 'latest',
    credentials: {
      accessKeyId: process.env.S3_API_KEY?.toString(),
      secretAccessKey: process.env.S3_API_SECRET?.toString()
    }
  });

  const params: PutObjectCommandInput = {
    Bucket: process.env.S3_PUBLIC_BUCKET,
    Key: key,
    Body: await convertToBuffer(data),
    ContentType: contentType,
  };

  await s3Client.send(new PutObjectCommand(params));
  
  console.log("key", key);
  return key;
}

export const getUrl: string = async (key: string) => {
  
  const DIR = "remixmantine";

  const s3Client = new S3Client({ 
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT,
    version: 'latest',
    credentials: {
      accessKeyId: process.env.S3_API_KEY?.toString(),
      secretAccessKey: process.env.S3_API_SECRET?.toString()
    }
  });

  return await getSignedUrl(s3Client, new GetObjectCommand({
    Bucket: process.env.S3_PUBLIC_BUCKET,
    Key: key,
  }), { expiresIn: 15 * 60 });

}

// The UploadHandler gives us an AsyncIterable<Uint8Array>, so we need to convert that to something the aws-sdk can use. 
// Here, we are going to convert that to a buffer to be consumed by the aws-sdk.
async function convertToBuffer(a: AsyncIterable<Uint8Array>) {
  const result = [];
  for await (const chunk of a) {
    result.push(chunk);
  }
  return Buffer.concat(result);
}

export const s3UploaderHandler: UploadHandler = async (args) => {
  return await uploadStreamToS3(args.name, args.data, args.filename!, args.contentType);
}