import { Schema, model } from "mongoose";

const blogSchema = new Schema({
    status: {type : String},
    image: {type:String},
    title: {type: String},
    content: {type: String}
})

const blogCollection = model("blogCollection", blogSchema)

export default blogCollection