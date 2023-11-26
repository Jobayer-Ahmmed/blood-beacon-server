import express from "express"
import upzilasCollection from "../../models/Upzilas.js"

var router = express.Router()

router.get("/upzilas/:districtName", async(req, res)=>{
    const district = req.params.districtName
    const query = {district}
    console.log("im upzilas router")
    const result = await upzilasCollection.find(query)
    res.send(result)
})



export default router