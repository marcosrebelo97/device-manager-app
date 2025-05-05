import { prisma } from "../client";

async function main() {
    await prisma.category.createMany({
        data: [
            { name: 'Smartphone' },
            { name: 'Notebook' },
            { name: 'Tablet' },
        ],
    });

    await prisma.device.createMany({
        data: [
            { color: 'Blue', partNumber: 12345, categoryId: 1 },
            { color: 'Black', partNumber: 67890, categoryId: 2 },
        ],
    });

    console.log('Executed successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
