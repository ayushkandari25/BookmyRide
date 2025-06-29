import bcrypt from "bcrypt";
import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const saltRounds = 10;
export const userSignup = (req, res) => {
  try {
    let myPlaintextPassword = req.body.password;
    bcrypt.hash(myPlaintextPassword, saltRounds, async function (err, hash) {
      if (err) {
        res.status(500).json({ message: "Something went wrong" });
      } else {
        await userModel.create({ ...req.body, password: hash });
        res.status(201).json({ message: "Signup Successfull" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User Not Found Please Signup" });
    } else {
      let myPlaintextPassword = password;
      let hash = user.password;
      bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
        if (err) {
          res.status(500).json({ message: "Something went wrong" });
        } else {
          if (result) {
            var token = jwt.sign(
              { userId: user._id, role: user.role },
              process.env.JWT_SECRET_KEY
            ); //if login is
            res.status(200).json({ message: "Login Sucessfull", token }); //sucess generate token.
          } else {
            res.status(403).json({ message: "Wrong Password" });
          }
        }
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const addDriverDetails = async (req, res) => {
 try {
   let user = await userModel.findById(req.userId);
   user.driverDetails = req.body;
   await user.save();
   res.status(201).json({ message: "Driver details Updated" });
 } catch (error) {
   res.status(500).json({ message: "Something went wrong" });
 }
};
