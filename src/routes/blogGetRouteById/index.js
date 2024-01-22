

import expres from "express"
import blogCollection from "../../models/Blog.js"

var router = expres.Router()

router.get("/dashboard/blog/edit/:id", async(req, res)=>{
    const getId = req.params.id
    const result = await blogCollection.findById(getId)
    res.send(result)
})

export default router