const { default: mongoose } = require("mongoose")



const projectSchema = new mongoose.Schema({

    Name:{type:String,
        required:true
    }, 
    Password:{type:String,
        required:true,
        
    }, 
    
},{timestamps:true})






module.exports = mongoose.model("Insta",projectSchema)