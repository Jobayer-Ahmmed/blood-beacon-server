import { Schema, model } from "mongoose";

const allUserSchema = new Schema({
    status: {type:String},
    user_type : {type : String},
    email : {type : String},
    username: {type : String},
    district : {type : String},
    upzila : {type : String},
    blood_group : {type : String},
    image:{type : String}
})

const allUserCollection = model("allUserCollection", allUserSchema)
export default allUserCollection