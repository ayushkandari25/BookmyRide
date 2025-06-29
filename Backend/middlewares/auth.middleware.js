import jwt from "jsonwebtoken"

export const authMiddleware = (req,res,next)=>{
    try {
        let token = req.headers.authorization?.split(" ")[1];
        if (!token) {
          res.status(403).json({ message: "Token Not Found, Please Login" });
        } else {
          var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
          if (decoded) {
            req.userId = decoded.userId;
            req.role = decoded.role;
            next();
          }
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong",error });

    }
}