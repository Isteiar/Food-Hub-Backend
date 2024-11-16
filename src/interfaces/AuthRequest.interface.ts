import { Request } from "express";
import { IUser } from "./User.Interface";

export interface IAuthRequest extends Request {
  user?: IUser;
}
