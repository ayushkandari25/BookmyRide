import express from "express";
import { addDriverDetails, userLogin, userSignup } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { roleBasedAccessControl } from "../middlewares/roleBasedAccess.middleware.js";

export const UserRouter = express.Router();

//SIGNUP//

UserRouter.post("/signup", userSignup)
UserRouter.post("/login", userLogin);

//DRIVER ROUTES//
UserRouter.patch("/add-driver-details",authMiddleware, roleBasedAccessControl(["driver"]),addDriverDetails)