import express from "express"
import allUserCollection from "../../models/AllUser.js"

var router = express.Router()

router.get("/users", async(req, res)=>{
    const page = parseInt(req.query.page)-1
    const size = parseInt(req.query.size)
    const result = await allUserCollection.find().skip(page*size).limit(size)
    res.send(result)
})



export default router
