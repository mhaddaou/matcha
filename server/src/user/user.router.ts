import express from "express";
import { LoginUser, RegisterUser } from "./user.controller";


const userRouter = express.Router();

userRouter.get('/login', LoginUser);
userRouter.get('/register', RegisterUser);

export default userRouter;