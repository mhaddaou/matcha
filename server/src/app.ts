import express , {Request, Response} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
require('dotenv').config(); // Load environment variables from .env file
import userRouter from './user/user.router';


const app = express();
// body parser
app.use(express.json({limit:"50mb"}));

// cookie parser
app.use(cookieParser());

// cors
app.use(cors({
    origin:process.env.origin,
}));

// testing API
app.get("/test", (req:Request, res:Response) => {
    res.status(200).json({
        success:true,
        message:"API is workin"
    });
})

// auth Routes
app.use('/user', userRouter);

// chat Router

// unkow rout
app.all("*", (req:Request, res:Response) => {
    res.status(404).json({
        success:false,
        message:`Route ${req.originalUrl} not found`
    })
})

export default app;