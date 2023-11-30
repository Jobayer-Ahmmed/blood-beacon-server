import expres from "express"
import blogCollection from "../../models/Blog.js"

var router = expres.Router()

router.post("/blog", async(req, res)=>{

    const blogData = new blogCollection(req.body)
    const result = await blogData.save()
    res.send(result)

})

export default router