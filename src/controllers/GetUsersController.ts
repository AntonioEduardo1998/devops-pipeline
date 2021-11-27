import { Request, Response } from 'express';
import { GetUsersService } from '../services/GetUsersService';

class GetUsersController {
    async handle(request: Request, response: Response) {
        const service = new GetUsersService();
        const result = await service.execute();
        return response.json(result);
    }
}

export { GetUsersController };