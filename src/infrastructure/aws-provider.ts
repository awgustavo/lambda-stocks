import { SQSError } from '@shared/errors/SQSError'
import * as AWS from 'aws-sdk'


export class AWSProvider<TMessageType> {
    private sqs:AWS.SQS
    constructor() {
        this.sqs = new AWS.SQS({ apiVersion: '2012-11-05', region: 'us-east-1' })
    }

    public async sendMessage(message: TMessageType, sqsURL:string) {
        return new Promise((resolve, reject) => {
            this.sqs.sendMessage(this.parseMessage(message, sqsURL), 
                (error: AWS.AWSError, data: AWS.SQS.SendMessageResult) => {
                    if (error) reject(new SQSError('SQS-ERROR', `Reported error was: ${error.message}`, error.stack))
                    resolve(data)        
                })
        })
    }

    private parseMessage(message: TMessageType, sqsURL: string): AWS.SQS.SendMessageRequest {
        return {
            DelaySeconds: 0,
            MessageBody: JSON.stringify(message),
            QueueUrl: sqsURL,
        }
    }
}