import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupvalidation } from './validation/yupvalidation';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate()
 const {register, handleSubmit, formState:{errors},reset} = useForm({
    resolver: yupResolver(yupvalidation)
 })

 const submit = async(Data)=>{
 let res= await fetch("http://localhost:4000/registrationform",{
    method:'POST',
    body:JSON.stringify(Data),
    headers:{
        'Content-Type':'application/json'
    }
  })
res= await res.json()
  navigate('/datashow')
}

const clear=()=>{
   reset({
name:'',
dob:'',
sex:'',
mobile:'',
idtype:'',
Govtid:'',
guradianlabel:'',
guradianName:'',
emergencyno:'',
address:'',
city:'',
state:'',
pincode:'',
occupation:'',
maritalstatus:'',
religion:'',
bloodgroup:'',
nationality:''
});
}
 return (
<>
<div className='container'>
<form onSubmit={handleSubmit(submit)}>
  <div className="form-group row mb-3 mt-5">
    <h5><u>Personal Details</u></h5>
    <label htmlFor="name" className="col-sm-1 col-form-label">Name</label>
    <div className="col-sm-3">
      <input type="text" className="form-control" name="name" placeholder="Enter Name" {...register("name")}/>
      {errors.name?(<span style={{color:"red"}}>{errors.name.message}</span>):<></>}
    </div>
    <label htmlFor="dob" className="col-sm-2 col-form-label" >Date of Birth or <p>Age </p> </label>
    <div className="col-sm-3">
      <input type="text" className="form-control" name="dob" placeholder="DD/MM/YYYY or Age in Years" {...register("dob")}/>
      {errors.dob?(<span style={{color:"red"}}>{errors.dob.message}</span>):<></>}
    </div>
    <label htmlFor="sex" className="col-sm-1 col-form-label">Sex</label>
    <div className="col-sm-2">
    <select className="form-select" aria-label="Default select example" name='sex' {...register("sex")}>
  <option value=""> Enter Sex</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
 
 
</select>
{errors.sex?(<span style={{color:"red"}}>{errors.sex.message}</span>):<></>}
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="mobile" className="col-sm-1 col-form-label">Mobile</label>
    <div className="col-sm-3">
      <input type="text" className="form-control" name="mobile" placeholder="Enter Mobile" {...register("mobile")}/>
      {errors.mobile?(<span style={{color:"red"}}>{errors.mobile.message}</span>):<></>}
    </div>
    <label htmlFor="id" className="col-sm-2 col-form-label" >Govt Issued ID</label>
    <div className="col-sm-2  ">
    <select className="form-select" aria-label="Default select example" name="idtype" {...register("idtype")}>
  <option value=""> ID Type</option>
  <option value="Aadhar">Aadhar</option>
  <option value="PAN">PAN</option>
</select>
{errors.idtype?(<span style={{color:"red"}}>{errors.idtype.message}</span>):<></>}
    </div>
    
    <div className="col-sm-4">
      <input type="text" className="form-control" name="Govtid" placeholder=" Enter Govt ID" {...register("Govtid")}/>
      {errors.Govtid?(<span style={{color:"red"}}>{errors.Govtid.message}</span>):<></>}
    </div>
  </div>
  <div className="form-group row mb-3 mt-3">
    <h5><u>Contact Details</u></h5>
   
    <label htmlFor="guardianlabel" className="col-sm-1 col-form-label" >Guradian Details</label>
    <div className="col-sm-1 ">
    <select className="form-select" aria-label="Default select example" name='guardianlabel' {...register("guardianlabel")}>
  <option value=""> Enter Label</option>
  <option value="Father">Father</option>
  <option value="Mother">Mother</option>

</select>
    </div>
    <div className="col-sm-2">
      <input type="text" className="form-control" name="guardianName" placeholder=" Enter Guradian Name" {...register("guardianName")}/>
    </div>
    <label htmlFor="email" className="col-sm-1 col-form-label">Email</label>
    <div className="col-sm-3">
      <input type="email" className="form-control" name="email" placeholder="Enter Email" {...register("email")}/>
    </div>
    <label htmlFor="emergencyno" className="col-sm-2 col-form-label">Emergency Contact Number</label>
    <div className="col-sm-2">
      <input type="text" className="form-control" name="emergencyno" placeholder="Enter Emergency No"  {...register("emergencyno")}/>
      {errors.emergencyno?(<span style={{color:"red"}}>{errors.emergencyno.message}</span>):<></>}
    </div>

  </div>
  <div className="form-group row mb-3 mt-3">
    <h5><u>Address Details</u></h5>
    <label htmlFor="address" className="col-sm-1 col-form-label">Address</label>
    <div className="col-sm-3">
      <input type="text" className="form-control" name="address" placeholder="Enter Address" {...register("address")}/>
    </div>
    <label htmlFor="state" className="col-sm-1 col-form-label">State</label>
    <div className="col-sm-3">
    <select className="form-select" aria-label="Default select example" name="state" {...register("state")}>
  <option value=""> Enter State</option>
  <option value="uttar pradesh">Uttar Pradesh</option>
  <option value="delhi">Delhi</option>
  <option value="hariyana">Hariyan</option>
</select>
    </div>
    <label htmlFor="city" className="col-sm-1 col-form-label">City</label>
    <div className="col-sm-3">
    <select className="form-select" aria-label="Default select example" name="city" {...register("city")}>
  <option value=""> Enter City/Town/Village</option>
  <option value="varanasi">Varanasi</option>
  <option value="kanpur">Kanpur</option>
  <option value="noida">Noida</option>
</select>
    </div>
    <label htmlFor="country" className="col-sm-1 col-form-label mt-2">Country</label>
    <div className="col-sm-3 mt-2">
    <div className="form-group" style={{position:'relative'}}>
    <input type="text" className="form-control" name="country" value="India" {...register("country")}/>   
    <i className="bi bi-x-lg" style={{position:'absolute',top:'calc(22%)',right:'1rem'}}></i>
       </div>    
           
     </div>
     <label htmlFor="pincode" className="col-sm-1 col-form-label mt-2">Pincode</label>
    <div className="col-sm-3">
      <input type="text" className="form-control mt-2" name="pincode" placeholder="Enter Pincode" {...register("pincode")}/>
    </div>
 
  </div>
  <div className="form-group row mb-3 mt-3">
    <h5><u>Other Details</u></h5>
    <label htmlFor="occupation" className="col-sm-1 col-form-label">Occupation</label>
    <div className="col-sm-3">
      <input type="text" className="form-control" name="occupation" placeholder="Enter Occupation" {...register("occupation")}/>
    </div>
    <label htmlFor="religion" className="col-sm-1 col-form-label">Religion</label>
    <div className="col-sm-2">
    <select className="form-select" aria-label="Default select example" name="religion" {...register("religion")}>
  <option value=""> Enter Religion</option>
  <option value="hindu">Hindu</option>
  <option value="muslim">Muslim</option>
</select>
    </div>
    <label htmlFor="maritalstatus" className="col-sm-1 col-form-label">Marital Status </label>
    <div className="col-sm-2">
    <select className="form-select" aria-label="Default select example" name="maritalstatus" {...register("maritalstatus")}>
  <option value=""> Enter Marital Status</option>
  <option value="unmarried">Unmarried</option>
  <option value="married">Married</option>
  
</select>
    </div>
    <label htmlFor="bloodgroup" className="col-sm-1 col-form-label formstyle">Blood Group</label>
    <div className="col-sm-1">
    <select className="form-select" aria-label="Default select example" name="bloodgroup" {...register("bloodgroup")}>
  <option value="">Group</option>
  <option value="A+">A+</option>
  <option value="B+">B+</option>
  <option value="A+">A-</option>
  <option value="B+">B-</option>
</select>
    </div>
    <label htmlFor="nationality" className="col-sm-1 col-form-label mt-2">Nationality</label>
    <div className="col-sm-3 mt-2">
    <div className="form-group" style={{position:'relative'}}>
    <input type="text" className="form-control" name="nationality" value="India" {...register("nationality")}/>   
    <i className="bi bi-x-lg" style={{position:'absolute',top:'calc(22%)',right:'1rem'}}></i>
       </div>    
           
     </div>
  </div>



    <div className=" text-end">
    <button type="button" className="btn btn-outline-danger" onClick={clear}>Cancel</button>
    <button type="submit" className="btn btn-success">Submit</button>
  </div>

  </form>
 
   </div>
  





       







</>
  )
}

export default Home