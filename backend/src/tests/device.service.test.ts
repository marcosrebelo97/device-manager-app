import prismaMock from "../mocks/prisma";
import { createDevice, getAllDevices, deleteDevice } from '../resources/device/device.service';

describe('Device Service', () => {
    it('should create a device when category exists', async () => {
        prismaMock.category.findUnique.mockResolvedValue({ id: 1, name: 'Phone' });
        prismaMock.device.create.mockResolvedValue({
            id: 1, color: 'Black', partNumber: 123, categoryId: 1
        });

        const result = await createDevice(prismaMock, {
            color: 'Black',
            partNumber: 123,
            categoryId: 1
        });

        expect(result).toEqual({
            id: 1,
            color: 'Black',
            partNumber: 123,
            categoryId: 1
        });
    });

    it('should throw error if category does not exist', async () => {
        prismaMock.category.findUnique.mockResolvedValue(null);

        await expect(createDevice(prismaMock, {
            color: 'Black',
            partNumber: 123,
            categoryId: 99
        })).rejects.toThrow("The specified category does not exist.");
    });

    it('should list all devices', async () => {
        prismaMock.device.findMany.mockResolvedValue([
            { id: 1, color: 'Black', partNumber: 123, categoryId: 1 },
            { id: 2, color: 'White', partNumber: 456, categoryId: 2 }
        ]);

        const result = await getAllDevices(prismaMock);
        expect(result).toEqual([
            { id: 1, color: 'Black', partNumber: 123, categoryId: 1 },
            { id: 2, color: 'White', partNumber: 456, categoryId: 2 }
        ]);
    });

    it('should delete a device', async () => {
        prismaMock.device.delete.mockResolvedValue({
            id: 1,
            color: 'Red',
            partNumber: 789,
            categoryId: 3
        });

        const result = await deleteDevice(prismaMock, 1);
        expect(result).not.toBeNull();
        expect(result!.id).toBe(1);
    });
});
