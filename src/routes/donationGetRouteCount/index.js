

import express from "express"
import donationCollection from "../../models/Donation.js"


var router = express.Router()

router.get("/donation-request-count", async(req, res)=>{
    const myResult = await donationCollection.find().estimatedDocumentCount()
    
    res.send({myResult})

})



export default router
