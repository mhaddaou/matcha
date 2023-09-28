import { Request, Response} from "express";

export const RegisterUser = (req:Request, res:Response) => {
    const {username, password} = req.body;
    console.log(username,password);
    res.status(200).json({
        success:true,
        message:"register route is workin"
    });
}

export const LoginUser = (req:Request, res:Response) => {
    const {username, password} = req.body;
    console.log(username,password);
    res.status(200).json({
        success:true,
        message:"Login route is workin"
    });
}