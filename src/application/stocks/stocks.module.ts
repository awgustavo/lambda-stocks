import { AWSProvider } from '@infrastructure/aws-provider'
import { StocksService } from './stocks.service'

export const StocksModule = {
    service: new StocksService(new AWSProvider())
}