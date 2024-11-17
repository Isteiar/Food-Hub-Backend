import { Router } from "express";
import {
  createUser,
  getLoggedInUserInfo,
  login,
} from "../controllers/User.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const userRouter = Router();

userRouter.post("/register", createUser);
userRouter.post("/login", login);

userRouter.get("/logged-in-user", authMiddleware, getLoggedInUserInfo);

export default userRouter;
