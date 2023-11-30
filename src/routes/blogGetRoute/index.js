import expres from "express"
import blogCollection from "../../models/Blog.js"

var router = expres.Router()

router.get("/blog", async(req, res)=>{
    const result = await blogCollection.find()
    res.send(result)

})

export default router