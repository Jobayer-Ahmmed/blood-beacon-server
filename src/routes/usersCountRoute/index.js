

import express from "express"
import allUserCollection from "../../models/AllUser.js"

var router = express.Router()

router.get("/all-users-count", async(req, res)=>{
    const myResult = await allUserCollection.find().estimatedDocumentCount()
    console.log(myResult)
    res.send({myResult})

})



export default router
