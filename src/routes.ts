import { Router } from 'express';
import { GetUsersController } from './controllers/GetUsersController';
const router = Router();

router.get("/users", new GetUsersController().handle);

export { router };