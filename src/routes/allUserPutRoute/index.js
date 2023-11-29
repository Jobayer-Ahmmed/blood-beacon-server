import express  from  "express"
import allUserCollection from "../../models/AllUser.js"

var router = express.Router()

router.put("/user/:getEmail", async(req, res)=>{
    const email = req.params.getEmail
    const data = req.body
    const query = {email}
    const result = await allUserCollection.findOneAndUpdate(query, {
        $set : data
    })
    res.send(result)
})

export default router