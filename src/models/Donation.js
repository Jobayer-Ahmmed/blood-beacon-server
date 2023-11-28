import { Schema, model } from "mongoose";

const donationSchema = new Schema({
    name: {type : String, required:true},
    email: {type : String, required:true},
    recipient_name: {type : String, required:true},
    districts: {type : String, required:true},
    upzilas: {type : String, required:true},
    hospital_name: {type : String, required:true},
    address: {type : String, required:true},
    donation_date: {type : String, required:true},
    donation_time: {type : String, required:true},
    request_message: {type : String, required:true},
    donation_status: {type : String, required:true}
})

const donationCollection = model("donationCollection", donationSchema)
export default donationCollection



