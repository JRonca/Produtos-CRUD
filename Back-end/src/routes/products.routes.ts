import { Router } from 'express';
import Multer from 'multer';

import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const productsController = new ProductsController();

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 50 * 1024 * 1024, // no larger than 50mb, you can change as needed.
    },
  });

productsRouter.get('/:id', productsController.index);

productsRouter.get('/', productsController.list);

productsRouter.post('/', productsController.create);

productsRouter.put('/:id', productsController.update);

productsRouter.patch('/', multer.single('file'), productsController.uploadImage);

productsRouter.delete('/:id', productsController.delete);

export default productsRouter;