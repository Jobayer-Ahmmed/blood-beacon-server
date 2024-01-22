import expres from "express"
import donationCollection from "../../models/Donation.js"

var router = expres.Router()
router.get("/donation/individual/:getEmail", async(req, res)=>{
    const query = {email : req.params.getEmail}
    const page = parseInt(req.query.page)-1
    const size = parseInt(req.query.size)
    
    const result = await donationCollection.find(query).skip(page*size).limit(size)
    res.send(result)

})

export default router