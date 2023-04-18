import {Request, Response} from 'express'
import { StockService } from './stock.service'

class StockController {

    async createStockTable(req: Request, res: Response) {
        const products = await new StockService().createStockTable()
        const productsWithStock = await new StockService().addStockValue(products)
        return res.status(200).json(productsWithStock)
    }

    async totalStockValue(req: Request, res: Response) {
        const totalStock = await new StockService().totalStockValue()
        return res.status(200).json(totalStock)
    }
}

export default new StockController()