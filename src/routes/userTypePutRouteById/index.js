import express  from  "express"
import allUserCollection from "../../models/AllUser.js"


var router = express.Router()

router.put("/user_type/:id", async(req, res)=>{
    const getId = req.params.id
    const data = req.body
    const result = await allUserCollection.findByIdAndUpdate(getId, {
        $set : data
    })
    res.send(result)
})

export default router