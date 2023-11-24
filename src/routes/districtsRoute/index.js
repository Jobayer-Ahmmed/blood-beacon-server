import express from "express"
import districtsCollection from "../../models/Districts.js"
var router = express.Router()

router.get("/districts", async(req, res)=>{
    console.log("router")
    const result = await districtsCollection.find()
    console.log(result)
    res.send(result)
})



export default router