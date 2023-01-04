import { StockDTO } from '@application/stocks/stocks.dto'
import { StocksModule } from '@application/stocks/stocks.module'
import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda'

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.info('Function started.')
    try {
        const result = await StocksModule.service.sendStock(JSON.parse(event.body) as StockDTO)
        console.info('Message sent.')
        return {
            statusCode: 200,
            body: JSON.stringify(result)
        }
    }
    catch (error) {
        console.error(error)
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}