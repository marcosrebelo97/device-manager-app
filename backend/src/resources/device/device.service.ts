import { PrismaClient, Device } from '@prisma/client';
import { CreateDeviceDTO } from "../device/device.types"

const prisma = new PrismaClient();

export const createDevice = async (data: CreateDeviceDTO): Promise<Device> => {
    const categoryExists = await prisma.category.findUnique({
        where: { id: data.categoryId },
    });

    if (!categoryExists) {
        throw new Error("The specified category does not exist.");
    }

    return await prisma.device.create({ data });
};

export const getAllDevices = async (): Promise<Device[]> => {
    return await prisma.device.findMany({
        include: { category: true },
    });
};

export const deleteDevice = async (id: number): Promise<Device | null> => {
    return await prisma.device.delete({
        where: { id },
    });
};