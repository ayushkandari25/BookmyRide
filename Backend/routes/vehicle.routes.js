import express from "express"
import { addVehicle, deleteVehicle, updateVehicle } from "../controllers/vehicle.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"
import { roleBasedAccessControl } from "../middlewares/roleBasedAccess.middleware.js"
export const VehicalRouter = express.Router()

VehicalRouter.post("/add-vehicle", authMiddleware, roleBasedAccessControl(["owner"]) ,addVehicle)

VehicalRouter.patch("/update-vehicle/:vehicleId", authMiddleware, roleBasedAccessControl(["owner"], updateVehicle));

VehicalRouter.patch("/delete-vehicle/:vehicleId", authMiddleware, roleBasedAccessControl(["owner"], deleteVehicle), deleteVehicle);
