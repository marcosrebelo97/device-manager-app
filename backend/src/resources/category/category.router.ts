import { Router } from "express";

import { validate } from "../../middlewares/validate";
import { createCategorySchema } from "./category.schema";
import { createCategory, getAllCategories, deleteCategory } from "./category.controller"

const router = Router();

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     tags:
 *       - Categories
 *     responses:
 *       400:
 *         description: Invalid request body
 *       201:
 *         description: Category created successfully
 */
router.post('/', validate(createCategorySchema), createCategory);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: List all categories
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: List of categories
 */
router.get('/', getAllCategories);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Deletes a category by ID
 *     tags:
 *       - Categories
 *     parameters:
 *       - name: id
 *     responses:
 *       400:
 *         description: Invalid ID supplied
 *       200:
 *         description: Category deleted successfully
 */
router.delete('/:id', deleteCategory);

export default router;
