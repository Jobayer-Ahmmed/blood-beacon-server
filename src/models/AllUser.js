import { Schema, model } from "mongoose";

const allUserSchema = new Schema({
    status: {type:String},
    user_type : {type : String},
    email : {type : String},
    district : {type : String},
    upzila : {type : String},
    blood_group : {type : String},
})

const allUserCollection = model("allUserCollection", allUserSchema)
export default allUserCollection