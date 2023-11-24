import express from "express"
import "dotenv/config"
import applyMiddleWare from "./middlewares/applyMiddleWare.js"
import connectDB from "./db/connectDB.js"
import districtsRoute from "./routes/districtsRoute/index.js"


const app =express()
const port = process.env.PORT || 5000

applyMiddleWare(app)

app.use(districtsRoute)

app.get("/health", (req, res)=>{
    res.send("Blood Donation server is running")
})


// import { MongoClient, ServerApiVersion } from 'mongodb'
// const uri = 'mongodb+srv://blood-donation:7CeJkWIQXLz3dp7h@cluster0.kedhyrh.mongodb.net/?retryWrites=true&w=majority'
// const client = new MongoClient(uri)
// const bloodDonationDB = client.db("bloodDonationDB")
// const districtsCollection = bloodDonationDB.collection("districtsCollection")
// app.get("/ami", async(req, res)=>{
// const cursor = districtsCollection.find()
// const result = await cursor.toArray()
// res.send(result)
// })



// import mongoose from "mongoose"
// const districtsSchema = new mongoose.Schema({
//     name: {type:String}
// })
// const getdata = async()=>{
//     const districtsCollection = new mongoose.model("districtsCollection", districtsSchema)
//     const result = await districtsCollection.find()
//     console.log(result)
// }
// getdata()








app.all("*", (req, res, next)=>{
    const myErr = new Error(`The request URL is invalid : [${req.url}]`)
    myErr.status=404
    next(myErr)
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({message : err.message})
})

const main = async()=>{
    await connectDB()
    app.listen(port,()=>console.log(`The port ${port} is running`))
}
main()