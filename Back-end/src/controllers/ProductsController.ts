import { NextFunction, Request, Response } from 'express';
import db from '../config/db';
import bucket from '../config/storage';
import {format} from 'util';

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
    public async uploadImage(request: Request, response: Response, next: NextFunction): Promise<Response|undefined> {
        try {
            console.log(request.file)
            const imagem = request.file;
            if (!imagem) {
                return response.status(400).json({ error: "no image file" });
            }
            const newFileName = `${Date.now()}_${imagem.originalname}`;
            const blob = bucket.file(newFileName);
            
            const blobStream = blob.createWriteStream();
            blobStream.on('error', err => {
                next(err);
              });
              
              blobStream.on('finish', async () => {
                
                await blob.makePublic();
                const publicUrl = blob.publicUrl()

                response.status(200).send(publicUrl);
              });
            
              blobStream.end(imagem.buffer);
        } catch (err) {
            console.error(err);
            return response.status(400).json({ error: "imagem não enviada" });
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