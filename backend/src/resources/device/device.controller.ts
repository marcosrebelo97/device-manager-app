import { Request, Response, RequestHandler } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { prisma } from "../../../prisma/client"

import * as deviceService from "../device/device.service";
import { createDeviceSchema } from "../device/device.schema";

export const createDevice: RequestHandler = async (req: Request, res: Response) => {
    const { error, value } = createDeviceSchema.validate(req.body);
    if (error) {
        res.status(StatusCodes.BAD_REQUEST).json(ReasonPhrases.BAD_REQUEST);
        return;
    }

    try {
        const device = await deviceService.createDevice(prisma, value);
        res.status(StatusCodes.CREATED).json(device);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
};

export const getAllDevices = async (_req: Request, res: Response) => {
    try {
        const devices = await deviceService.getAllDevices(prisma);
        res.json(devices);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
};

export const deleteDevice: RequestHandler = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(StatusCodes.BAD_REQUEST).json(ReasonPhrases.BAD_REQUEST);
        return;
    }

    try {
        await deviceService.deleteDevice(prisma, id);
        res.status(StatusCodes.NO_CONTENT).send();
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: ReasonPhrases.INTERNAL_SERVER_ERROR
        });
    }
};