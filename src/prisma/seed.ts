import PrismaClient from './index';
import { users } from './seeds/users';

async function main() {
    await PrismaClient.user.createMany({
        data: users,
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await PrismaClient.$disconnect();
    });