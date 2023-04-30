const express= require('express')
const cors= require('cors'); 
const bodyParser =require('body-parser')
const mongoose = require('mongoose');
const formTemplateCopy = require('./model/datasubmit')
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test_taskdb');
}
const app= express();
app.use(cors());
var jsonParser = bodyParser.json()
app.post("/registrationform",jsonParser,async(request,res)=>{
    const userForm = new formTemplateCopy({
        name:request.body.name,
        dob:request.body.dob,
        sex:request.body.sex,
        mobile:request.body.mobile,
        idtype:request.body.idtype,
        Govtid:request.body.Govtid,
        guradianlabel:request.body.guardianlabel,
        guradianName:request.body.guardianName,
        emergencyno:request.body.emergencyno,
        address:request.body.address,
        city:request.body.city,
        state:request.body.state,
        pincode:request.body.pincode,
        occupation:request.body.occupation,
        maritalstatus:request.body.maritalstatus,
        religion:request.body.religion,
        bloodgroup:request.body.bloodgroup,
        nationality:request.body.nationality
    })
    let docs= await userForm.save()
  res.send(docs)
})
app.get("/getregistrationdata",jsonParser,async(request,res)=>{
   let docs=  await formTemplateCopy.find({})
  res.send(docs)
})

app.listen(4000,()=>console.log("server is running"))