import AppError from "../utils/AppError.js";

const roleMiddleware = (...roles)=>{
    return(req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next(
                new AppError('Access denied', 403)
            )
        }
        next();
    }
}
export default roleMiddleware;