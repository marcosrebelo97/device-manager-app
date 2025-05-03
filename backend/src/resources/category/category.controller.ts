import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

import * as categoryService from "../category/category.service";
import { CreateCategoryDTO } from "./category.types";

export const createCategory = async (req: Request, res: Response) => {
    const data: CreateCategoryDTO = req.body;

    try {
        const category = await categoryService.createCategory(data);
        res.status(StatusCodes.CREATED).json(category);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: ReasonPhrases.INTERNAL_SERVER_ERROR
        });
    }
}

export const getAllCategories = async (_req: Request, res: Response) => {
    const categories = await categoryService.getAllCategories();
    res.status(StatusCodes.OK).json(categories);
};

export const deleteCategory = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
        await categoryService.deleteCategory(id);
        res.status(StatusCodes.NO_CONTENT).send();
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: ReasonPhrases.INTERNAL_SERVER_ERROR
        });
    }
};
