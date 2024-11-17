import { Document } from "mongoose";

export type RoleType = "user" | "owner";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: RoleType;
}
