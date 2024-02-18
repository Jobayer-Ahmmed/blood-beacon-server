import express from "express"
import FundingCollection from "../../models/Funding.js"

const router = express.Router()

router.post("/funding", async(req, res)=>{
    console.log("funding is work")
    const data = new FundingCollection(req.body)
    const result = await data.save()
    res.send(result)
})

export default router