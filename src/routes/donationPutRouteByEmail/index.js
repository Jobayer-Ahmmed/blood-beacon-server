
import expres, { query } from "express"
import donationCollection from "../../models/Donation.js"

var router = expres.Router()
router.put("/donation/:getEmail", async(req, res)=>{
    const email = req.params.getEmail
    const data = req.body
    const query = {email}
    const result = await donationCollection.findOneAndUpdate(query, {
        $set : data
    })
    res.send(result)
})

export default router