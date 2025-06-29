import { VehicleModel } from "../models/vehicle.model.js"

export const addVehicle = async (req,res)=>{
    try {
        let vehicle = await VehicleModel.create({...req.body, owner:req.userId});
        res.status(201).json({ message: "Vehicle Created" , data:vehicle});
    } catch (error) {
        res.status(500).json({ message: "Something went wrong",error });
    }
}

export const updateVehicle = async(req,res)=>{
    try {
        const vehicleId  = req.params.vehicleId;
        await VehicleModel.findByIdAndUpdate(vehicleId, req.body)
        res.status(201).json({ message: "Vehicle details updated"});
    } catch (error) {
      res.status(500).json({ message: "Something went wrong", error });
    }
}


export const deleteVehicle = async(req,res)=>{
    try {
      const vehicleId = req.params.vehicleId;
      const deletedVehicle = await VehicleModel.findByIdAndDelete(vehicleId);
      if (!deletedVehicle) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
      res.status(200).json({ message: "Vehicle deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong", error });
    }
}