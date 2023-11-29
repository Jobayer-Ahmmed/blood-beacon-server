import { Schema, model } from "mongoose";

const allUserSchema = new Schema({
    user_type : {type : String},
    email : {type : String},
    district : {type : String, required:true},
    upzila : {type : String, required:true},
    blood_group : {type : String, required:true},
})

const allUserCollection = model("allUserCollection", allUserSchema)
export default allUserCollection