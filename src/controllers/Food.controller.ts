//create a new food item

import { Request, Response } from "express";
import { FoodModel } from "../models/Food.model";

export const createFoodItem = async (req: Request, res: Response) => {
  try {
    const { foodItemName, foodImages, foodDescription, foodPricePerUnit } =
      req.body;
    const newFood = await FoodModel.create({
      foodItemName,
      foodImages,
      foodDescription,
      foodPricePerUnit,
    });

    res.status(201).send({ message: "New food item is created" });
  } catch (err) {
    res.status(400).send({ message: "Could not create user", error: err });
  }
};
