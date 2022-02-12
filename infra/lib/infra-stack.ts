import * as cdk from '@aws-cdk/core'
import { Bucket, BucketEncryption } from '@aws-cdk/aws-s3'
import * as lambda from '@aws-cdk/aws-lambda-nodejs';
import { Runtime } from '@aws-cdk/aws-lambda';
import * as path from 'path';

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

    const lambdaFunction = new lambda.NodejsFunction(this, 'sync-order-test', {
      runtime: Runtime.NODEJS_14_X,
      entry: path.join(__dirname, '..', 'functions', 'consumer.ts'),
      handler: 'handler',
    })

    new cdk.CfnOutput(this, 'testBucketNameExport', {
      value: bucket.bucketName,
      exportName: 'testBucketName',
    })
  }
}
