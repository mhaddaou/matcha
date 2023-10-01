import path from "path";
import app from "./src/app";
import dotenv from 'dotenv'
import client from "./src/db/connectiondb";
import createTables from "./src/db/createTables";
dotenv.config()

const server = app.listen(+`${process.env.PORT_SERV}`, () =>{
    console.log('server is listen in port ' + `${process.env.PORT_SERV}`);
})

createTables();

