import prismaMock from "../mocks/prisma";
import { createCategory, getAllCategories, deleteCategory } from "../resources/category/category.service";

describe('Category Service', () => {
    it('should create a new category when name is unique', async () => {
        prismaMock.category.findUnique.mockResolvedValue(null);
        prismaMock.category.create.mockResolvedValue({ id: 1, name: 'Test' });

        const result = await createCategory(prismaMock, { name: 'Test' });
        expect(result).toEqual({ id: 1, name: 'Test' });
    });

    it('should throw error when category name already exists', async () => {
        prismaMock.category.findUnique.mockResolvedValue({ id: 1, name: 'Test' });

        await expect(createCategory(prismaMock, { name: 'Test' }))
            .rejects
            .toThrow("Category 'Test' already exists.");
    });

    it('should list all categories', async () => {
        prismaMock.category.findMany.mockResolvedValue([{ id: 1, name: 'Test' }]);
        const result = await getAllCategories(prismaMock);
        expect(result).toEqual([{ id: 1, name: 'Test' }]);
    });

    it('should delete a category', async () => {
        prismaMock.category.delete.mockResolvedValue({ id: 1, name: 'Deleted' });
        const result = await deleteCategory(prismaMock, 1);
        expect(result).toEqual({ id: 1, name: 'Deleted' });
    });
});
