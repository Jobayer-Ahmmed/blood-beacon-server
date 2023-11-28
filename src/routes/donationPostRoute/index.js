import expres from "express"
import donationCollection from "../../models/Donation.js"

var router = expres.Router()
router.post("/donation", async(req, res)=>{
    const donationData = new donationCollection(req.body)
    const result = await donationData.save()
    res.send(result)

})

export default router