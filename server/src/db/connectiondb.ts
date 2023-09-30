import {Pool} from 'pg'
import dotenv from 'dotenv'
import * as fs from 'fs';
dotenv.config()


const Config = {
    host: `${process.env.HOST}`,
    user: `${process.env.USER_DB}`,
    password: `${process.env.PASSWORD_DB}`,
    database: `${process.env.DATABASE_NAME}`,
    port: +`${process.env.PORT}`,
    multipleStatements: true
}

const client = new Pool(Config)


export default client;
