import bcrypt from 'bcryptjs';
import User from './authModel.js';
import AppError from '../../utils/AppError.js';

import { generateAccessToken, generateRefreshToken } from '../../utils/jwt.js';

export const registerUser= async(payload)=>{
    const existingUser=await User.findOne({
        email:payload.email
    })

    if(existingUser){
        throw new AppError("User already exists",400);
    }

    const hashedPassword=await bcrypt.hash(payload.password, 12)
    const user = await User.create({
        ...payload,
        password:hashedPassword
    })
    return user;
} 

export const loginUser=async(
    email,password
)=>{
    const user=await User.findOne({email});

    if(!user){
        throw new AppError("Invalid email or password",400);
    }

    const isPasswordCorrect=await bcrypt.compare(
        password,
        user.password
    )

    const accessToken=generateAccessToken(user._id);
    const refreshToken=generateRefreshToken(user._id);

    return{
        user,accessToken,refreshToken
    }
}