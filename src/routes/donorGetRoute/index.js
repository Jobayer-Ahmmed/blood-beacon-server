import express from "express"
import allUserCollection from "../../models/AllUser.js"

var router = express.Router()

router.get("/donor", async(req, res)=>{
    const user_type = "Donor"
    const query = {user_type}
    const result = await allUserCollection.find(query)
    res.send(result)
})



export default router