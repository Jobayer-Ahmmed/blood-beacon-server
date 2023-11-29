import expres from "express"
import donationCollection from "../../models/Donation.js"

var router = expres.Router()
router.get("/donation/:getEmail", async(req, res)=>{
    const email = req.params.getEmail
    const query = {email}
    const result = await donationCollection.find(query)
    res.send(result)

})

export default router