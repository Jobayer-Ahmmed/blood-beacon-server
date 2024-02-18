import { Schema, model } from "mongoose";


const FundingSchema = new Schema({
    name: {type: String, required: true},
    money: {type: String, required: true}
})

const FundingCollection  = model("FundingCollection", FundingSchema)
export default FundingCollection