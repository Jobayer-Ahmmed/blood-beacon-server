import express from "express"
import upzilasCollection from "../../models/Upzilas.js"

var router = express.Router()

router.get("/upzilas/:id", async(req, res)=>{
    const district_id = req.params.id
    const query = {district_id}
    console.log("im upzilas router")
    const result = await upzilasCollection.find(query)
    res.send(result)
})



export default router