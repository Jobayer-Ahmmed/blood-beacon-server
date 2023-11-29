
import expres, { query } from "express"
import donationCollection from "../../models/Donation.js"

var router = expres.Router()
router.delete("/donation/:id", async(req, res)=>{
    const getId = req.params.id   
    const result = await donationCollection.findByIdAndDelete(getId)
    res.send(result)

})

export default router