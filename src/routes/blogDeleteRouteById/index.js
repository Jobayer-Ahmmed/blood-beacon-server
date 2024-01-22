

import expres from "express"
import blogCollection from "../../models/Blog.js"

var router = expres.Router()

router.delete("/dashboard/blog/delete/:id", async(req, res)=>{
    const getId = req.params.id
    const result = await blogCollection.findByIdAndDelete(getId)
    res.send(result)
})

export default router