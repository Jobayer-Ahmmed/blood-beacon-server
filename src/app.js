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
import publishBlogGetRoute from "./routes/publishBlogGetRoute/index.js"
import userStatusPutRoute from "./routes/userStatusPutRoute/index.js"
import userTypePutRouteById from "./routes/userTypePutRouteById/index.js"
import donationStatusPutRouteById from "./routes/donationStatusPutRouteById/index.js"
import blogGetRouteById from "./routes/blogGetRouteById/index.js"
import blogDeleteRouteById from "./routes/blogDeleteRouteById/index.js"
import blogReadtRouteById from "./routes/blogReadRouteById/index.js"
import userCountRoute from "./routes/usersCountRoute/index.js"
import donationGetRouteCount from "./routes/donationGetRouteCount/index.js"
import donationRequestDetails from "./routes/donationRequestDetails/index.js"
import donationIndividualGetRoute from "./routes/donationIndividulGetRoute/index.js"
import donationRequestCountByEmail from "./routes/donationRequestCountByEmail/index.js"
import searchDonorGetRoute from "./routes/searchDonorGetRoute/index.js"
import fundingPost from "./routes/fundingPostRoute/index.js"
import fundingGet from "./routes/fundingGetRoute/index.js"


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
app.use(publishBlogGetRoute)
app.use(userStatusPutRoute)
app.use(userTypePutRouteById)
app.use(donationStatusPutRouteById)
app.use(blogGetRouteById)
app.use(blogDeleteRouteById)
app.use(blogReadtRouteById)
app.use(userCountRoute)
app.use(donationGetRouteCount)
app.use(donationRequestDetails)
app.use(donationIndividualGetRoute)
app.use(donationRequestCountByEmail)
app.use(searchDonorGetRoute)
app.use(fundingPost)
app.use(fundingGet)





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