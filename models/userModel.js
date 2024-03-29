import { Schema,models,model } from "mongoose";

import bcrypt from 'bcrypt';
//schema
const userSchema=new Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        lowercase: true,
        unique: true,
        required:true,
    },
    password:{
        type: String,
        required: true,
        select:false,
    },
    birthday:{
        type: Date,
        required: true,
    },
    gender:{
        type: String,
        enum: ["M", "F", "X"],
        required:true,
    },

    phone:{
        type:Number,
        required:true,
    },

    role:{
        type:String,
        enum: ["admin", "user"],
        required:true
    },

    createdAt:{
        type:Date,
        required:true
    },
    updatedAt:{
        type:Date,
        required:true
    },

});
//ates de guardar qualquer usuario
userSchema.pre('save', async function (){
    if(!this.isModified("password")) return;
    //12-nivel de ecriptacao
    this.password= await bcrypt.hash(this.password,12)
})

//modelo se existir ele utiliza esse ou nao criar um novo modelo .ele ira acrescentar o s automaticamente
const User=models.User || model("User",userSchema);
export default User;