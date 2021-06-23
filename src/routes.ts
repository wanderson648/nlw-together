import { Router } from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { unsureAdmin } from './middlewares/unsuerAdmin';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();



router.post("/users", createUserController.handle);
router.post("/tags", unsureAdmin, createTagController.handle);


export { router };