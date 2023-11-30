import express from "express"
import allUserCollection from "../../models/AllUser.js"

var router = express.Router()

router.get("/users", async(req, res)=>{
    const result = await allUserCollection.find()
    res.send(result)
})



export default router