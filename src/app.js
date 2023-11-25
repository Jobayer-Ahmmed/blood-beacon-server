import express from "express"
import "dotenv/config"
import applyMiddleWare from "./middlewares/applyMiddleWare.js"
import connectDB from "./db/connectDB.js"
import districtsRoute from "./routes/districtsRoute/index.js"
import upzilasRoute from "./routes/upzilasRoute/index.js"


const app =express()
const port = process.env.PORT || 5000

applyMiddleWare(app)

app.use(districtsRoute)
app.use(upzilasRoute)

app.get("/health", (req, res)=>{
    res.send("Blood Donation server is running")
})








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