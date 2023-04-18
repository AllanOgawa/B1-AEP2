import StockModel from './stock.schema'
import ProductModel from '../products/product.schema'


export class StockService {

    async createStockTable() {
        const exist = await StockModel.count()

        if(exist) 
            return await StockModel.find()

        const product=await ProductModel.find()
        const productStock = await StockModel.insertMany(product)
        return productStock
    }

    async addStockValue(product: any){
        for(let i in product){
            await StockModel.findOneAndUpdate(
                {'_id': product[i]._id},
                {stock: parseFloat
                    (product.filter((tmp, index) => index == i).map(item =>  item.quantity * item.price))}
            )
        }
    return await StockModel.find()
    }

    async totalStockValue(){
        const productStock = await StockModel.find()
        const stockValue =  productStock
        .map(item => item.stock).reduce((previous:any, current:any) => {return previous + current})
        
        return 'Valor total do Stock: ' + stockValue
    }

}
