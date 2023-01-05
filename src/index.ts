import { StockDTO } from '@application/stocks/stocks.dto'
import { StocksModule } from '@application/stocks/stocks.module'

export const handler = async (event, context) => {
    console.log(`Function started: ${ context.awsRequestId }`)
    try {
        console.log(event)
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