import { Request, Response } from "express";
import { FoodCategoryModel } from "../models/FoodCategory.model";

//create a new food category
export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName, categoryThumbnail } = req.body;

    await FoodCategoryModel.create({ categoryName, categoryThumbnail });

    res.status(201).send({ message: "New food category is created" });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Could not create food category", error: err });
  }
};

// Get all food categories
export const getAllFoodCategories = async (req: Request, res: Response) => {
  try {
    const allFoodCategories = await FoodCategoryModel.find();
    if (!allFoodCategories) {
      res.status(404).send({ message: "Food categories are not found" });
      return;
    }

    res.status(200).send({
      message: "Categories retrieved successfully",
      response: allFoodCategories,
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error retrieving categories", error: err });
  }
};

// Get a single food category by ID
export const getFoodCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await FoodCategoryModel.findById(id);

    if (!category) {
      res.status(404).send({ message: "Category not found" });
      return;
    }

    res
      .status(200)
      .send({ message: "Category retrieved successfully", response: category });
  } catch (err) {
    res.status(500).send({ message: "Error retrieving category", error: err });
  }
};
