import { StocksService } from '@application/stocks.service'
import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda'

export const lambdaHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log(`Event: ${JSON.stringify(event, null, 2)}`)
    console.log(`Context: ${JSON.stringify(context, null, 2)}`)
    console.log(new StocksService().validate())
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'test',
        }),
    }
}

