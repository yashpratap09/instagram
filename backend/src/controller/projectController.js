const projectModel = require("../models/projectModel")

const createProject = async function(req,res){
    try{
    const data = req.body

    const createProject = await projectModel.create(data)
    return res.status(201).send({status:true , message : "Successfully create" , data:createProject})
    }catch(error){
        return res.status(500).send(error.message)
    }

}






module.exports={createProject}