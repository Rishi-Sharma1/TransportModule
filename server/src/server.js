import http from "http";
import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import connectDB from "./config/db.js";
import logger from "./utils/logger.js"

const server=http.createServer(app);

const PORT=5000 || process.env.PORT;

const startServer=async()=>{
    try{
        await connectDB();
        server.listen(PORT,()=>{
            logger.info(`Server running on port ${PORT}`)
            
        })
    }catch(error){
        logger.error(error);
        process.exit(1);
    }
}

startServer();