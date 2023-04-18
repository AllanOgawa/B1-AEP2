import {Request, Response} from 'express'
import { ProductService } from './product.service'
import { writeFile, readFile } from 'fs/promises'

class ProductController {

    async create(req: Request, res: Response) {
        const product = await new ProductService().create(req.body)
        return res.status(200).json(product)
    }

    async list(req: Request, res: Response) {
        const product = await new ProductService().list()
        return res.status(200).json(product)
    }

    async find(req: Request, res: Response) {
        const product = await new ProductService().find(req.params.id)
        return res.status(200).json(product)
    }

    async update(req: Request, res: Response) {
        const product = await new ProductService().update(req.params.id, req.body)
        return res.status(200).json(product)
    }

    async delete(req: Request, res: Response) {
       await new ProductService().delete(req.params.id)
        return res.status(200). json("Product Deletado com sucesso")
    }

    async writeFile(req: Request, res: Response) {
        await new ProductService().writeFile()
        return res.status(200).json("Produtos Salvos no arquivo")
    }

    async readFile(req: Request, res: Response){
        await new ProductService().writeFile()
        const product = await readFile('products.json', "utf-8")
        return res.status(200).json(product)
    }

    async random(req: Request, res: Response){
        const product = await new ProductService().random()
        return res.status(200).json(product)
    }
}

export default new ProductController()