const express = require("express")
const router = express.Router()
const projectController = require("../controller/projectController")


router.post("/createProject",projectController.createProject)



module.exports=router