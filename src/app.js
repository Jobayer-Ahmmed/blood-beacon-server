import express from "express"
import applyMiddleWare from "./middlewares/applyMiddleWare.js"
import districtsRoute from "./routes/districtsRoute/index.js"
import upzilasRoute from "./routes/upzilasRoute/index.js"
import allUserPostRoute from "./routes/allUserPostRoute/index.js"
import allUserGetRoute from "./routes/allUserGetRoute/index.js"
import donationPostRoute from "./routes/donationPostRoute/index.js"
import userTypeGetRoute from "./routes/userTypeGetRoute/index.js"
import allUserPutRoute from "./routes/allUserPutRoute/index.js"
import donationGetRouteByEmail from "./routes/donationGetRouteByEmail/index.js"
import donorGetRoute from "./routes/donorGetRoute/index.js"
import donationGetRoute from "./routes/donationGetRoute/index.js"
import donationDeleteRouteByEmail from "./routes/donationDeleteRouteByEmail/index.js"
import donationPutRouteByEmail from "./routes/donationPutRouteByEmail/index.js"
import donationGetRouteById from "./routes/donationGetRouteById/index.js"
import donationPutRouteById from "./routes/donationPutRouteById/index.js"
import usersRoute from "./routes/usersRoute/index.js"
import blogPostRoute from "./routes/blogPostRoute/index.js"
import blogGetRoute from "./routes/blogGetRoute/index.js"
import blogPutRoute from "./routes/blogPutRoute/index.js"


const app =express()


applyMiddleWare(app)

app.use(districtsRoute)
app.use(upzilasRoute)
app.use(allUserPostRoute)
app.use(allUserGetRoute)
app.use(donationPostRoute)
app.use(donationGetRouteByEmail)
app.use(userTypeGetRoute)
app.use(allUserPutRoute)
app.use(donorGetRoute)
app.use(donationGetRoute)
app.use(donationDeleteRouteByEmail)
app.use(donationPutRouteByEmail)
app.use(donationGetRouteById)
app.use(donationPutRouteById)
app.use(usersRoute)
app.use(blogPostRoute)
app.use(blogGetRoute)
app.use(blogPutRoute)


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