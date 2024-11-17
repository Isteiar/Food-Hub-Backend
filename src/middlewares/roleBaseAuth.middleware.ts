import { Response } from "express";
import { IAuthRequest } from "../interfaces/AuthRequest.interface";
import { RoleType } from "../interfaces/User.Interface";

export const authenticateFor = (role: RoleType) => {
  return (req: IAuthRequest, res: Response, next: Function) => {
    try {
      if (req.user !== undefined) {
        if (req.user.role === role) {
          next();
        } else {
          res.status(403).send({ message: "Unauthorized" });
        }
      }
    } catch (error) {
      res.sendStatus(401);
    }
  };
};
