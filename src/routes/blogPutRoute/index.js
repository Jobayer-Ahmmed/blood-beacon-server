import expres from "express"
import blogCollection from "../../models/Blog.js"

var router = expres.Router()

router.put("/blog/:id", async(req, res)=>{
    const getId = req.params.id
    const data = req.body
    const result = await blogCollection.findByIdAndUpdate(getId, {
        $set : data
    })
    res.send(result)

})

export default router