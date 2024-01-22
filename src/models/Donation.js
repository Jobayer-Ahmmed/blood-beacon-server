import { Schema, model } from "mongoose";

const donationSchema = new Schema({
    name: {type : String},
    email: {type : String},
    recipient_name: {type : String},
    districts: {type : String},
    upzilas: {type : String},
    hospital_name: {type : String},
    address: {type : String},
    donation_date: {type : String},
    donation_time: {type : String},
    request_message: {type : String},
    donation_status: {type : String},
    user_type : {type:String}
})

const donationCollection = model("donationCollection", donationSchema)
export default donationCollection



