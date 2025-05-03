import { Router } from "express";
import { createDevice, getAllDevices, deleteDevice } from "./device.controller";

const router = Router();

router.post("/", createDevice);
router.get("/", getAllDevices);
router.delete("/:id", deleteDevice);

export default router;
