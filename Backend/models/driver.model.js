import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  licence_number: { type: String, required: true },
  mobile: { type: Number, required: true, unique: true },
  isAvailable: { type: Boolean },
  assigned_Vehicle: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" },
});

export const driverModel = mongoose.model("Driver", driverSchema);
