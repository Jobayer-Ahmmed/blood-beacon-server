import express from "express"
import allUserCollection from "../../models/AllUser.js"

var router = express.Router()

router.get("/dashboard/profile/:getEmail", async(req, res)=>{
    const email = req.params.getEmail
    console.log(email)
    const query = {email}
    const result = await allUserCollection.findOne(query)
    res.send(result)
})



export default router