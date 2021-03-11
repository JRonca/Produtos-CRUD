import { Request, Response } from 'express';
import db from '../db';

export default class ProductsController {
	public async create(request: Request, response: Response): Promise<Response> {
        try {
            const { name, image, price, doc } = request.body;
            const docRef = db.collection('products').doc(doc);
            
            await docRef.set({
                name,
                image,
                price
            });

            return response.json({image,name,price,doc});
        } catch (err) {
            return response.status(400).json({ error: "produto não criado" });
        }
	}
}