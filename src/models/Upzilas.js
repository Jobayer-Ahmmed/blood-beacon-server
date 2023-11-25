import { Schema, model } from "mongoose";

const upzilasSchema = new Schema({
    
    id : {type : Number, required : true},
    district_id : {type : Number, required : true},
    name : {type : String, required:true}
})
const upzilasCollection =  model("upzilasCollection", upzilasSchema)
console.log("i am upzila model")
export default upzilasCollection