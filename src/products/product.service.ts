import { ProductType } from "./types/product.types";
import ProductModel from './product.schema'
import { writeFile, readFile } from 'fs/promises'

export class ProductService {

    async create(product: ProductType) {
        const produto = await ProductModel.create(product)
        return produto
    }

    async list() {
        const produto = await ProductModel.find()
        return produto
    }

    async find(id) {
        const produto = await ProductModel.findById(id)
        return produto
    }

    async update(id, product: ProductType){
        const produto = await ProductModel.findOneAndUpdate({'_id ': id}, {
            name: product.name,
            quantity: product.quantity,
            price: product.price,
        },{new: true})

        return produto
    }

    async delete(id){
        await ProductModel.findByIdAndDelete(id)
        return 
    }

    async writeFile() {
        const produto = await ProductModel.find()
        try {
            await writeFile('products.json', JSON.stringify(produto, null, 2))
        }
        catch(err) {
            console.error('erro na escrita', err)
        }
        return 
    }

    async random(){
        const produto = await ProductModel.find()
        let randomProducts:any = []

        while(randomProducts.length < 4) {
            let index: any = Math.floor(Math.random() * 10)
            if(!randomProducts.includes(produto[index])) {
                randomProducts.push(produto[index])
            }
        }
        return randomProducts
    }
    
}