
import expres, { query } from "express"
import donationCollection from "../../models/Donation.js"

var router = expres.Router()
router.put("/donation/update-request/:id", async(req, res)=>{
    console.log("I am from donation put route by id")
    const getId = req.params.id
    const data = req.body
    const result = await donationCollection.findByIdAndUpdate(getId, {
        $set : data
    })
    res.send(result)
})

export default router