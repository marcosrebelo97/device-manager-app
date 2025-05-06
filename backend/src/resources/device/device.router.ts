import { Router } from "express";
import { createDevice, getAllDevices, deleteDevice } from "./device.controller";

const router = Router();

/**
 * @swagger
 * /devices:
 *   post:
 *     summary: Create a new device
 *     tags:
 *       - Devices
 *     responses:
 *       400:
 *         description: Invalid request body
 *       201:
 *         description: Device created successfully
 */
router.post("/", createDevice);

/**
 * @swagger
 * /devices:
 *   get:
 *     summary: List all devices
 *     tags:
 *       - Devices
 *     responses:
 *       200:
 *         description: List of devices
 */
router.get("/", getAllDevices);

/**
 * @swagger
 * /devices/{id}:
 *   delete:
 *     summary: Deletes a device by ID
 *     tags:
 *       - Devices
 *     parameters:
 *       - name: id
 *     responses:
 *       400:
 *         description: Invalid ID supplied
 *       200:
 *         description: Device deleted successfully
 */
router.delete("/:id", deleteDevice);

export default router;
