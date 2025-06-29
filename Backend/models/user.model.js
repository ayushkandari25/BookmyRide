import mongoose from "mongoose";


const driverSchema = new mongoose.Schema({
  licence_number: { type: String, required: true },
  mobile: { type: Number, required: true, unique: true },
  isAvailable: { type: Boolean },
  assigned_Vehicle: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle" },
});


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum:["admin","owner","driver","customer"]},
  gender:{type:String, enum:["male","female"]},
  driverDetails: driverSchema //NESTED SCHEMA//
});

export const userModel = mongoose.model("User", userSchema)