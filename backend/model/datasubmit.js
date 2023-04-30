const mongoose = require('mongoose')


const formTemplate = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    sex:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
    
    },
    idtype:{
        type:String,
      
    },
    govtid:{
        type:String,
       
    },
    guradianlabel:{
        type:String,
 
    },
    guradianName:{
        type:String,
       
    },
    emergencyno:{
        type:String,
      
    },
    address:{
        type:String,
       
    },
    city:{
        type:String,
      
    },
    state:{
        type:String,
      
    },
    pincode:{
        type:String,
       
    },
    occupation:{
        type:String,
       
    },
    maritalstatus:{
        type:String,
       
    },
    religion:{
        type:String,
        
    },
    bloodgroup:{
        type:String,
       
    },
    nationality:{
        type:String,
      
    },


})


module.exports = mongoose.model("formData",formTemplate)