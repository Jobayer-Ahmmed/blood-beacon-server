import express from "express"
import districtsCollection from "../../models/Districts.js"
var router = express.Router()

router.get("/districts", async(req, res)=>{
    const result = await districtsCollection.find()
    res.send(result)
})



export default router