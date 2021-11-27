import prismaClient from "../prisma";
import { GetUsersService } from '../services/GetUsersService';


let getUsersService: GetUsersService

describe('GetUsers', () => {

    beforeEach(() => {
        getUsersService = new GetUsersService();
    })

    it('should be able to get all users', async () => {
        const users: any = [
            {
                id: 'someId',
                name: 'John Doe',
                email: 'john@doe.com',
                birthday: '08/07/1998'
            },
            {
                id: 'someId2',
                name: 'John Doe 2',
                email: 'john2@doe.com',
                birthday: '08/07/1998'
            },
        ];

        jest.spyOn(prismaClient.user, 'findMany').mockReturnValue(users);

        const result = await getUsersService.execute();

        expect(result).toEqual(users);
    })
})
