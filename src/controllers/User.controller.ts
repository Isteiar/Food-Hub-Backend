import { hash } from "bcrypt";
import { Request, Response } from "express";
import { UserModel } from "../models/User.model";

export const createUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
  
    try {
      //check if email is already exists or not!
      const userAlreadyExist = await UserModel.findOne({ email });
      if (userAlreadyExist) {
        res.status(400).send({
          message: "User with this email already exists",
        });
        return;
      }
  
      //hashing password
      const hashPassword = await hash(password, 10);
  
      //creating a new user
      const newUser = await UserModel.create({
        username,
        email,
        password: hashPassword,
      });
  
      res.status(201).send({ message: "New user is created", response: newUser });
    } catch (err) {
      res.status(400).send({ message: "Could not create user", error: err });
    }
  };

  