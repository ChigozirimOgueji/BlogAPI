import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    email:{
        type: String,
        password: String,
        age: Number
    },
    password:{
        type: String,
        required: true
    }
})

const userModel = new model("user", userSchema, "users");
export default userModel;