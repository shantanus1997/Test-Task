import * as yup from "yup";
import 'yup-phone';

let age="^[1-9][0-9]*$"
let Dob="^[1-9][0-9]*$|([0-9]{2})\/([0-9]{2})\/([0-9]{4})"
export const yupvalidation = yup.object().shape({
    name: yup.string().required("name is Required"),
    dob: yup.string().matches(Dob, "Should contain a digit")
    .required('age is required'),
    sex: yup.string().oneOf(["Male","Female"]).required(),
    mobile: yup.string().phone("IN",true,'').required(),
    emergencyno: yup.string().phone("IN",true,'').required(),
    idtype:yup.string().required(),
    Govtid: yup.string().when("idtype",{
    is:"Aadhar",
    then:yup.string().matches(age, "Should contain 12 digit").min(12).max(12).required()
    }
      

    ).when("idtype",{
        is:"PAN",
        then:yup.string().min(10).max(10).required()
        }
          
    
        )
  })