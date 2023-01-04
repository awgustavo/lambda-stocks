import { StockDTO } from '@application/stocks/stocks.dto'
import { StocksModule } from '@application/stocks/stocks.module'
import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda'

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log(`Event: ${JSON.stringify(event, null, 2)}`)
    console.log(`Context: ${JSON.stringify(context, null, 2)}`)
    try {
        const result = await StocksModule.service.sendStock(JSON.parse(event.body) as StockDTO)
        return {
            statusCode: 200,
            body: JSON.stringify(result)
        }
    }
    catch (error) {
        console.error(error)
    }
}