import expres from "express"
import donationCollection from "../../models/Donation.js"

var router = expres.Router()
router.get("/dashboard/donation-requset-details/:id", async(req, res)=>{
    const getId = req.params.id
    const result = await donationCollection.findById(getId)
    res.send(result)

})

export default router