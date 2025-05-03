import { Router } from "express";

import deviceRouter from "../resources/device/device.router";
import categoryRouter from "../resources/category/category.router";

const router = Router();

router.use("/devices",
    // #swagger.tags = ['Device']
    deviceRouter
);

router.use("/categories",
    // #swagger.tags = ['Category']
    categoryRouter
);

export default router;
