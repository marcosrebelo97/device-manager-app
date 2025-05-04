import { PrismaClient, Device } from '@prisma/client';
import { CreateDeviceDTO } from "./device.types";

export const createDevice = async (prisma: PrismaClient, data: CreateDeviceDTO): Promise<Device> => {
    const categoryExists = await prisma.category.findUnique({
        where: { id: data.categoryId },
    });

    if (!categoryExists) throw new Error("The specified category does not exist.");
    return prisma.device.create({ data });
};

export const getAllDevices = async (prisma: PrismaClient): Promise<Device[]> => {
    return prisma.device.findMany({ include: { category: true } });
};

export const deleteDevice = async (prisma: PrismaClient, id: number): Promise<Device | null> => {
    return prisma.device.delete({ where: { id } });
};
