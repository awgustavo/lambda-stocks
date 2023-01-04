import { AWSProvider } from '@infrastructure/aws-provider'
import { StocksService } from './stocks.service'


describe('given the stocks service', () => {

    it('should validate the stock', () => {
        const isStockValid = new StocksService(new AWSProvider()).isStockValid({
            code: 'XPTO',
            price: 12.3,
            marketDate: new Date(2022, 10, 10)
        })
        expect(isStockValid).toBeTruthy()    
    })
})