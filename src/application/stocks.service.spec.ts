import { StocksService } from './stocks.service'

describe('given the stocks service', () => {
    it('should validate the stock', () => {
        const isStockValid = new StocksService().validate()
        expect(isStockValid).toBeTruthy()    
    })

})