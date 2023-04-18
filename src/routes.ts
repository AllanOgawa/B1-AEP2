import { Router } from 'express'
import userController from './users/user.controller'
import ProductController from './products/product.controller'
import StockController from './productStock/stock.controller'
const routes = Router()

routes.post('/users', userController.create)
routes.get('/users', userController.list)
routes.get('/users/:id', userController.find)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)

routes.post('/product', ProductController.create)
routes.get('/product', ProductController.list)
routes.get('/product/:id', ProductController.find)
routes.put('/product/:id', ProductController.update)
routes.delete('/product/:id', ProductController.delete)
routes.get('/product-writeFile', ProductController.writeFile)
routes.get('/product-readFile', ProductController.readFile)
routes.get('/product-random', ProductController.random)

routes.get('/product-stock', StockController.createStockTable)
routes.get('/product-stock-total', StockController.totalStockValue)
export default routes