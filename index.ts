import { StocksService } from './src/application/stocks.service'

const handler = async (event) => {
    StocksService
    const response =    {
        statusCode: 200,
        body: event.body,
    }
    return response
}

export default handler