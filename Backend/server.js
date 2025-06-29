import "dotenv/config";
import express from "express";
import { connectDB } from "./configs/mongodb.config.js";
import morgan from "morgan";
import {accessLogStream} from "./middlewares/logger.middleware.js"
import { UserRouter } from "./routes/user.routes.js";
import { VehicalRouter } from "./routes/vehicle.routes.js";


const PORT = process.env.PORT || 8000;
connectDB();
const app = express();
app.use(express.json());
app.use(morgan("combined", { stream: accessLogStream }));
app.use("/users",UserRouter)

app.use("/vehicle", VehicalRouter)


app.get("/test", (req, res) => {
  try {
    res.status(200).json({ message: "This is Test Route" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

//KEEP IT AT LAST//
app.use((req, res) => {
  try {
    res.status(404).json({ message: "This request is not defined" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
