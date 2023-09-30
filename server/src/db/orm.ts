import {Request, Response} from 'express'
import { Pool } from 'pg';
import { Connection } from 'pg';
import client from './connectiondb';


export class User {
    
    username: string;
    gender: string;
    sexualPreferences: string;
    bio: string;
    interesting: string[];
    email: string;
    rating: string | null;
  
    constructor({username, gender,sexualPreferences, bio, interesting, email, rating}: { username: string, gender: string, sexualPreferences: string, bio: string, interesting: string[], email: string, rating: string | null}) {
      
      this.username = username;
      this.gender = gender;
      this.sexualPreferences = sexualPreferences;
      this.bio = bio;
      this.interesting = interesting;
      this.email = email;
      this.rating  = rating ;
    }
  }
  
  

export default class Orm {
    private connection : Pool ;
    private user : User;
    constructor(user : User){
        this.connection = client;
        this.user = user;
    }
   
    async save() : Promise<void>{
        const query  = `INSERT INTO users (username, gender,sexualPreferences, bio, interesting, email, rating )
            VALUES ($1, $2, $3, $4 ,$5, $6, $7);
        `
        const values = [
            this.user.username,
            this.user.gender,
            this.user.sexualPreferences,
            this.user.bio,
            this.user.interesting,
            this.user.email,
            this.user.rating
        ];
        try{
            const response = await this.connection.query(query, values);
            console.log(response)

        }catch(err : any){
            console.log(err.message)
            return err.message
        }
    }

}

