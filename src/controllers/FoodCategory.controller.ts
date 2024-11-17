import { Request, Response } from "express";
import { FoodCategoryModel } from "../models/FoodCategory.model";

//create a new food category
export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName, categoryThumbnail } = req.body;

    await FoodCategoryModel.create({ categoryName, categoryThumbnail });

    res.status(201).send({ message: "New food category is created" });
  } catch (err) {
    res.status(500).send({ message: "Could not create food category", error: err });
  }
};
