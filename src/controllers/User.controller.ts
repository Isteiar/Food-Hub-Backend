import { compare, hash } from "bcrypt";
import { Request, Response } from "express";
import { UserModel } from "../models/User.model";
import { sign } from "jsonwebtoken";
import { IAuthRequest } from "../interfaces/AuthRequest.interface";

///register user
export const createUser = async (req: Request, res: Response) => {
  const { username, email, password, role } = req.body;

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
      role,
    });

    res.status(201).send({ message: "New user is created", response: newUser });
  } catch (err) {
    res.status(400).send({ message: "Could not create user", error: err });
  }
};

//login user
export const login = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;
  console.log(req.body);
  try {
    //find the user is exist or not!
    const user = await UserModel.findOne({ email });
    if (!user) {
      //if user is not found
      res.status(401).send({ message: "Invalid email" });
      return;
    }

    const validPassword = await compare(password, user.password); //(frontendPassword,dbPassword)

    if (!validPassword) {
      res.status(401).send({ message: "Invalid password" });
      return;
    }

    // Verify the role
    if (user.role !== role) {
      res.status(403).send({ message: "Unauthorized role" });
      return;
    }

    //generate token
    const accessToken = sign({ id: user._id }, process.env.SECRET as string);

    res
      .status(200)
      .send({ message: "User is logged-in", access_token: accessToken });
  } catch (err) {
    res.status(500).send({ message: "User can't login", error: err });
  }
};

//get logged-in user info
export const getLoggedInUserInfo = (req: IAuthRequest, res: Response) => {
  res.send(req.user);
};
