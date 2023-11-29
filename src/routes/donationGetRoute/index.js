import expres from "express"
import donationCollection from "../../models/Donation.js"

var router = expres.Router()
router.get("/donation", async(req, res)=>{
    const result = await donationCollection.find()
    res.send(result)

})

export default router