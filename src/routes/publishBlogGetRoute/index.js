
import expres from "express"
import blogCollection from "../../models/Blog.js"

var router = expres.Router()

router.get("/blog/publish", async(req, res)=>{
    const query = {status:"Publish"}
    const result = await blogCollection.find(query)
    res.send(result)

})

export default router