import { _Object, S3Client, ListBucketsCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'
import * as process from 'process'

class TebiClient {
  private client: S3Client
  private readonly options: {
    endpoint: string
    region: string
    credentials: { accessKeyId: string; secretAccessKey: string }
  }

  constructor() {
    this.options = {
      region: process.env.TEBI_REGION as string,
      endpoint: process.env.NEXT_PUBLIC_TEBI_END_POINT as string,
      credentials: {
        accessKeyId: process.env.TEBI_ACCESS_KEY as string,
        secretAccessKey: process.env.TEBI_SECRET_KEY as string,
      },
    }

    this.client = new S3Client(this.options)
  }

  getBuckets() {
    return this.client.send(new ListBucketsCommand({})).then((data) => data.Buckets)
  }

  getObjects({ bucket }: { bucket: string }): Promise<_Object[]> {
    return this.client.send(new ListObjectsV2Command({ Bucket: bucket })).then((data) => data.Contents as _Object[])
  }
}

export default TebiClient
