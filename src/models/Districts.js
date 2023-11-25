import { Schema, model } from "mongoose";


const districtsSchema = new Schema({
    district_id : {type : Number, required : true},
    name : {type : String, required:true}
})
const districtsCollection =  model("districtsCollection", districtsSchema)

export default districtsCollection