import { AWSProvider } from '@infrastructure/aws-provider'
import { StockDTO } from './stocks.dto'

export class StocksService {
    constructor(private awsProvider: AWSProvider<StockDTO>) {}

    async sendStock(stockData: StockDTO) {
        if (!this.isStockValid(stockData)) return
        const result = await this.awsProvider.sendMessage(stockData, process.env['STOCKS_QUEUE'])
        return result
    }

    isStockValid(stockData: StockDTO): boolean {
        return stockData.code && stockData.marketDate && stockData.price > 0
    }
}