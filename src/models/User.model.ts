import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/User.Interface";

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      trim: true,
      required: [true, "Username is required "],
      minlength: [3, "Username must be at least 3 characters long"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
      required: [true, "Email is required "],
    },
    password: {
      type: String,
      required: [true, "Password is required "],
      minlength: [4, "Password must be at least 4 characters long"],
    },
    role:{
      userType: {
        type: String,
        enum : ['user','restaurant_owner'],
        default: 'user'
    },
    }
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<IUser>("User", userSchema);
