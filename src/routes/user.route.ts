import { Router } from "express";
import { createUser } from "../controllers/User.controller";

const userRouter = Router();    

userRouter.post("/resgister", createUser);
// userRouter.post("/login", login);


export default userRouter;