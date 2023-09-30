import * as fs from 'fs'
import client from './connectiondb'
import path from 'path';

const createTables = async () =>{
    await client.connect().then(() =>{console.log('connection to database successfuly')});
    try{
        const user = fs.readFileSync('./schema.sql', 'utf-8').toString();
        client.query(user).then(() =>{ client.end()}).catch((err) =>{console.log(err.message)});

    }catch(err: any){console.log(err.message + ' here')}
    

}
export default createTables;