

import express from "express"
import allUserCollection from "../../models/AllUser.js"

var router = express.Router()

router.get("/search-donor", async(req, res)=>{
    const email = req.query.email
    const blood_group = req.query.blood_group
    const district = req.query.districtName
    const upzila = req.query.upzilaName
    console.log(typeof email)

    let query={}
    console.log(email, blood_group, district, upzila)
    if(email=='' && district==="Select One" && upzila==="Select District First" && blood_group!=="Select Blood Group"){
         query = { blood_group}
         console.log("1st")
    }

    else if(email!=='' && district==="Select One"  && upzila==="Select District First"  && blood_group==="Select Blood Group"){
        query = {email}
        console.log("2nd")
    }
    else if(email=='' && district!=="Select One"  && upzila==="Select District First"  && blood_group==="Select Blood Group"){
        query = {district}
        console.log("3rd")
    }
    else if(email=='' && district!=="Select One"  && upzila!=="Select District First"  && blood_group==="Select Blood Group"){
        query = {email, blood_group}
        console.log("4th")
    }
    else if(email!==''  && blood_group!=="Select Blood Group" && upzila==="Select District First"  && district==="Select One" ){
        query = {email, blood_group}
        console.log("5th")
    }

    else{
        query = {email, blood_group, district, upzila}
    }
    
    const result = await allUserCollection.find(query)
    console.log(result)
    res.send(result)
})



export default router