import path from "path";
import app from "./src/app";
import dotenv from 'dotenv'
import client from "./src/db/connectiondb";
import createTables from "./src/db/createTables";
import Orm, { User } from "./src/db/orm";
const user = {
    username: "johndoe",
    password : 'nice',
    email: "jniceoe@example.com",
  };

dotenv.config()

const server = app.listen(+`${process.env.PORT_SERV}`, () =>{
    console.log('server is listen in port ' + `${process.env.PORT_SERV}`);
})

createTables();
const sa = async () =>{
    const newuser = new User(user);
    const newUser = new Orm(newuser);
    await newUser.save();
    
}

sa();

