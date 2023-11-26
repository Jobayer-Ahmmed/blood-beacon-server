import express from "express"
import applyMiddleWare from "./middlewares/applyMiddleWare.js"
import districtsRoute from "./routes/districtsRoute/index.js"
import upzilasRoute from "./routes/upzilasRoute/index.js"
import donorPostRoute from "./routes/donorPostRoute/index.js"


const app =express()


applyMiddleWare(app)

app.use(districtsRoute)
app.use(upzilasRoute)
app.use(donorPostRoute)

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

export default app