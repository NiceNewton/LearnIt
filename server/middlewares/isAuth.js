import jwt from "jsonwebtoken"
import { User } from "../models/user.js";
export const isAuth = async(req,res,next) => {
    try {
        const token = req.headers.token;
        if(!token)
           return res.status(403).json({
            message:"please Login",
        });
        const decodeData = jwt.verify(token,process.env.Jwt_Sec);
        req.user = await User.findById(decodeData._id);
        next();
     } catch (error) {
        res.status(500).json({
            message:"Login first",
        });
    }
};

export const isAdmin = (req,res,next) => {
    try {
        if(req.user.role !== "admin")
           return res.status(403).json({
            message:"Admin access denied",
        });
        next();
    } catch (error) {
        res.status(500).json({
            message:"Admin access denied",
        });
    }
}