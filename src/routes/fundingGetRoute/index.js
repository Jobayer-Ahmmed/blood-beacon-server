import express from "express"
import FundingCollection from "../../models/Funding.js"

const router = express.Router()

router.get("/funding", async(req, res)=>{
    const result = await FundingCollection.find()
    res.send(result)
})

export default router