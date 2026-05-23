import jwt from "jsonwebtoken";

export const generateAccessToken = (userId)=>{
    return jwt.sign(
        {userId},
        process.env.JWT_SECRET,
        {
            expiresIn:"10s"
        }
    )
}

export const generateRefreshToken = (userId)=>{
    return jwt.sign(
        {userId},
        process.env.JWT_SECRET,
        {
            expiresIn:"7d"
        }
    )
}