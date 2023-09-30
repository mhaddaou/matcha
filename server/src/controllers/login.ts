
import { Request, Response } from "express-serve-static-core";

const login = async(req : Request, res : Response) =>{
    res.send('hello from login');
}

const Default = (req : Request, res: Response) =>{
    res.send('hello this is index page');
}

export  {login, Default};