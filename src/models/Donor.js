import { Schema, model } from "mongoose";

const donorSchema = new Schema({
    username : {type : String, required:true},
    email : {type : String, required:true},
    district : {type : String, required:true},
    upzila : {type : String, required:true},
    blood_group : {type : String, required:true},
    image : {type : String, required:true},
})

const donorCollection = model("donorCollection", donorSchema)
export default donorCollection