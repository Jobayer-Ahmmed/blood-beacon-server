

import express from "express"
import donationCollection from "../../models/Donation.js"


var router = express.Router()

router.get("/request-count/:getemail", async(req, res)=>{
    const email = req.params.getemail
    const query = {email}
    const result = await donationCollection.find(query)
    res.send({myResult:result.length})

})



export default router
