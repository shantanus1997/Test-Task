import React, { useEffect,useState } from 'react'
import DataTable,{ createTheme } from 'react-data-table-component'
const Datashow= () => {
 const [data,setdata] =useState([])
const columns=[
  {
    name:"Name",
    selector:row=> row.name
  },
  {
    name:"Age/Sex",
    selector:row=> row.dob
  },
  {
    name:"Mobile",
    selector:row=> row.mobile
  },
  {
    name:"Address",
    selector:row=> row.address
  }
  , {
    name:"Govt_Id",
    selector:row=> row.Govtid
  }
  , {
    name:"Guardian_Details",
    selector:row=> row.guradianName

  },
  {
    name:"Nationality",
    selector:row=> row.nationality
  }

]
 useEffect(()=>{
getdata()
 },[])
const getdata =async()=>{
  let res= await fetch("http://localhost:4000/getregistrationdata",{
    method:'GET',
    })
res= await res.json()
setdata(res)
}

const customStyle= {
  headCells: {
    style: {
      backgroundColor:'white',
      fontWeight:"bold",
      fontSize:'14px',
      borderStyle:'solid',
      borderWidth:'1px',
      borderColor:'black',
      color:"black",
      
    }
  },
  rows :{
    style:{
      borderStyle:'solid',
      borderWidth:'1px',
      borderColor:'black',
      

    }
  }
}
  return (
    <>
    <div className="container-fluid">
    {/* <DataTable
columns={columns}
data={data}
fixedHeader  
pagination
customStyles={customStyle}
>
    </DataTable> */}
      <table className="table" style={{ "border": "2px solid black"}}>
                                     
                                     <thead  style={{ "border-bottom": "2px solid black"}} >
                                     <tr >
                                             <th  scope='col'  style={{ "border-right": "2px solid black"}} className='eit'>Name</th>
                                             <th scope='col' style={{ "border-right": "2px solid black"}}>Date of Birth or age</th>
                                             <th scope='col' style={{ "border-right": "2px solid black"}}>Sex</th>
                                             <th scope='col' style={{ "border-right": "2px solid black"}}>Mobile Number</th>
                                             <th scope='col' style={{ "border-right": "2px solid black"}}>Govt ID</th>
                                             
                                             <th scope='col' style={{ "border-right": "2px solid black"}}>Guardian Name</th>
                                             <th scope='col' style={{ "border-right": "2px solid black"}}>Address</th>
                                             <th scope='col'style={{ "border-right": "2px solid black"}} >City</th>
                                             <th scope='col'style={{ "border-right": "2px solid black"}}>State</th>
                                             <th scope='col'style={{ "border-right": "2px solid black"}}>Pin Code</th>
                                             <th scope='col'style={{ "border-right": "2px solid black"}}>Occupation</th>
                                             <th scope='col' style={{ "border-right": "2px solid black"}}>Mariatal Status</th>
                                             
                                             <th scope='col' style={{ "border-right": "2px solid black"}}>Religion</th>
                                             <th scope='col' style={{ "border-right": "2px solid black"}}>Blood Group</th>
                                             <th colSpan="2" style={{ "border-right": "2px solid black"}}>Nationality</th>
                                             
                                         </tr>
                                     </thead>
                                     <tbody style={{ "border-bottom": "2px solid black"}}>

                                         { 
                                             data?.map(item => (
                                             <tr>
                                             <td style={{ "border-right": "1px solid black"}}>{item.name}</td>
                                             <td style={{ "border-right": "2px solid black"}}>{item.dob}</td>
                                             <td style={{ "border-right": "2px solid black"}}>{item.sex}</td>
                                             <td style={{ "border-right": "2px solid black"}}>{item.mobile}</td>
                                             <td style={{ "border-right": "2px solid black"}}>{item.Govtid}</td>
                                             <td style={{ "border-right": "2px solid black"}}>{item.guradianName}</td>
                                             <td style={{ "border-right": "2px solid black"}}>{item.address}</td>
                      
                                             <td style={{ "border-right": "2px solid black"}}>{item.city}</td>
                                             <td style={{ "border-right": "2px solid black"}}>{item.state}</td>
                                             <td style={{ "border-right": "2px solid black"}}>{item.pincode}</td>
                                             <td style={{ "border-right": "2px solid black"}}>{item.occupation}</td>
                                             <td style={{ "border-right": "2px solid black"}}>{item.maritalstatus}</td>
                                             <td style={{ "border-right": "2px solid black"}}>{item.religion}</td>
                                             <td style={{ "border-right": "2px solid black"}}>{item.bloodgroup}</td>
                                              <td style={{ "border-right": "2px solid black"}}>{item.nationality}</td>
                                             

                                             
                                            
                                           
                                         </tr>
                                             ))
                                         }

                                         
                                         
                                         
                                     </tbody>
                                     
                                 </table>
    
    </div>
    </>
  )
}

export default Datashow