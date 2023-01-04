import { StockDTO } from '@application/stocks/stocks.dto'
import { StocksModule } from '@application/stocks/stocks.module'
import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda'

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log(`Function started: ${ context.awsRequestId } `)
    try {
        const result = await StocksModule.service.sendStock(JSON.parse(event.body) as StockDTO)
        console.log('Message sent.')
        return {
            statusCode: 200,
            body: JSON.stringify(result)
        }
    }
    catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}