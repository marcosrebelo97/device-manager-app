import Joi from "joi";

export const createDeviceSchema = Joi.object({
    color: Joi.string().max(16).regex(/^[A-Za-zÀ-ÿ\s-]+$/).required(),
    partNumber: Joi.number().integer().positive().required(),
    categoryId: Joi.number().integer().positive().required(),
});