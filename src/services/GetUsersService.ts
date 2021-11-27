import prismaClient from "../prisma";

class GetUsersService {
    async execute() {
        const users = await prismaClient.user.findMany()
        return users;
    }
}

export { GetUsersService };