import { Schema, model } from "mongoose";

const upzilasSchema = new Schema({
    
    id : {type : Number, required : true},
    district_id : {type : Number, required : true},
    name : {type : String, required:true},
    district : {type : String, required:true}
})
const upzilasCollection =  model("upzilasCollection", upzilasSchema)
export default upzilasCollection