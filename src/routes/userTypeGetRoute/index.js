import express from "express"
import allUserCollection from "../../models/AllUser.js"

var router = express.Router()

router.get("/user/:getEmail", async(req, res)=>{
    const email = req.params.getEmail
    const query = {email}
    const result = await allUserCollection.findOne(query)
    res.send({user_type:result.user_type})
})



export default router