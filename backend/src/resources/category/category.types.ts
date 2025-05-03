import { Category } from "@prisma/client";

export type CreateCategoryDTO = Pick<Category, 'name'>;
