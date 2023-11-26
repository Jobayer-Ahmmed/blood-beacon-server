import express  from  "express"
import allUserCollection from "../../models/AllUser.js"

var router = express.Router()

router.post("/user", async(req, res)=>{
    console.log("i am from allUser")
    const allUserData = new allUserCollection(req.body)
    const result = await allUserData.save()
    res.send(result)
})

export default router