import express  from  "express"
import donorCollection from "../../models/Donor.js";

var router = express.Router()

router.post("/donor", async(req, res)=>{
    console.log("i am from donor")
    const donorData = new donorCollection(req.body)
    const result = await donorData.save()
    res.send(result)
})

export default router