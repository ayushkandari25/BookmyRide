import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  model: { type: String, required: true },
  type: { type: String, required: true, enum:["SUV","Sedan","Hatchback"]},
  registration_number: { type: String, required: true },
  seat_count: { type: Number, required: true, min:4, max:56},
  ventilation:{type:String, enum:["AC","Non-AC"]},
  farePerKm:{type:Number, required:true, min:10},
  isAvailable:{type:Boolean, default:true},
  owner:{type:mongoose.Schema.Types.ObjectId, ref:"User"}
});

export const VehicleModel = mongoose.model("Vehicle", vehicleSchema);