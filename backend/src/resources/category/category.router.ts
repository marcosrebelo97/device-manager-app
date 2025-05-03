import { Router } from "express";

import { validate } from "../../middlewares/validate";
import { createCategorySchema } from "./category.schema";
import { createCategory, getAllCategories, deleteCategory } from "./category.controller"

const router = Router();

router.post('/', validate(createCategorySchema), createCategory);
router.get('/', getAllCategories);
router.delete('/:id', deleteCategory);

export default router;
