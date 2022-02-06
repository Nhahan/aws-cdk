import * as cdk from '@aws-cdk/core'
import { Bucket, BucketEncryption } from '@aws-cdk/aws-s3'

export class InfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'testBucket', {
      encryption: BucketEncryption.S3_MANAGED,
    })
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'InfraQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    new cdk.CfnOutput(this, 'testBucketNameExport', {
      value: bucket.bucketName,
      exportName: 'testBucketName',
    })
  }
}
