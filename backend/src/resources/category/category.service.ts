import { PrismaClient, Category } from "@prisma/client";
import { CreateCategoryDTO } from "./category.types";

export const createCategory = async (prisma: PrismaClient, data: CreateCategoryDTO): Promise<Category> => {
    const existing = await prisma.category.findUnique({ where: { name: data.name } });

    if (existing) throw new Error(`Category '${data.name}' already exists.`);
    return prisma.category.create({ data });
};

export const getAllCategories = async (prisma: PrismaClient): Promise<Category[]> => {
    return prisma.category.findMany();
};

export const deleteCategory = async (prisma: PrismaClient, id: number): Promise<Category | null> => {
    return prisma.category.delete({ where: { id } });
};
