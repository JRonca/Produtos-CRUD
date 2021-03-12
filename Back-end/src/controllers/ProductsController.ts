import { Request, Response } from 'express';
import db from '../config/db';

interface IResponseList{
    id: string;
    data: object;
}
export default class ProductsController {
    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;

            const docRef = db.collection('products').doc(id)
            const doc = await docRef.get();
            if (!doc.exists) {
                return response.status(404).json({ error: "documento não encontrado" });
            } else {
                return response.json(doc.data());
            }
              
            
        } catch (err) {
            return response.status(400).json({ error: "erro" });
        }
	}
    public async list(request: Request, response: Response): Promise<Response> {
        try {
            const snapshot = await db.collection('products').get();
            const listProducts: IResponseList[] = [];
            snapshot.forEach((doc) => {
                listProducts.push({id: doc.id,data: doc.data()});
            });
            return response.json(listProducts);
        } catch (err) {
            return response.status(400).json({ error: "erro" });
        }
	}
	public async create(request: Request, response: Response): Promise<Response> {
        try {
            const { name, image, price, id } = request.body;
            const docRef = db.collection('products').doc(id);
            
            await docRef.set({
                name,
                image,
                price
            });

            return response.json({image,name,price,id});
        } catch (err) {
            console.error(err);
            return response.status(400).json({ error: "produto não criado" });
        }
	}
    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            const { name, image, price } = request.body;
            const docRef = db.collection('products').doc(id);
            
            const res = await docRef.update({
                name,
                image,
                price
            });

            return response.json({
                name,
                image,
                price
            });
        } catch (err) {
            console.error(err);
            return response.status(400).json({ error: "produto não editado" });
        }
	}
    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            
            await db.collection('products').doc(id).delete();

            return response.json({ok: "deleted"});
        } catch (err) {
            console.error(err);
            return response.status(400).json({ error: "produto não editado" });
        }
	}
}