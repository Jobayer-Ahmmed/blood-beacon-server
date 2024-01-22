import expres from "express"
import donationCollection from "../../models/Donation.js"

var router = expres.Router()
router.put("/donation_status/:id", async(req, res)=>{
    const getId = req.params.id
    const data = req.body
    console.log(data)
    const result = await donationCollection.findByIdAndUpdate(getId, {
        $set : data
    })
    res.send(result)

})

export default router