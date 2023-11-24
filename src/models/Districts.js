import { Schema, model } from "mongoose";



const districtsSchema = new Schema({
    name : {type : String, required:true}
})
console.log("models")
const districtsCollection =  model("districtsCollection", districtsSchema)

export default districtsCollection