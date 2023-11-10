import {Schema, model} from "mongoose";
 
export interface USEI {
    _id? : string;
    username: string;
    password: string;
}

const UserSchema = new Schema<USEI>({
      username: {type: String, required: true, unique:true},
      password: {type: String, requred: true},
      
})