import { Device } from "@prisma/client";

export type CreateDeviceDTO = Pick<Device, "color" | "partNumber" | "categoryId">;