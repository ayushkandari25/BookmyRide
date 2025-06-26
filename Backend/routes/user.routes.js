import express from "express";
import { userLogin, userSignup } from "../controllers/user.controller.js";

export const UserRouter = express.Router();

//SIGNUP//

UserRouter.post("/signup", userSignup)
UserRouter.post("/login", userLogin);