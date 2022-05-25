import React, { useState } from 'react'
import Header from './Header'

const Addstudent = () => {
    var[admno,setadmno]=useState("")
    var[rollno,setrollno]=useState("")
    var[name,setname]=useState("")
    var[classn,setclassn]=useState("")
    var[parentname,setparentname]=useState("")
    var[mobileno,setmobileno]=useState("")
    var[address,setaddress]=useState("")
    const subdata=()=>{
        const data={"admno":admno,"rollno":rollno,"name":name,"classn":classn,"parentname":parentname,"mobileno":mobileno,"address":address}
        console.log(data)
    }
   

  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label for="" className="form-label">Admission No</label>
              <input onChange={(b)=>{setadmno(b.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Roll No</label>
                <input onChange={(b)=>{setrollno(b.target.value)}} type="text" className="form-control"/>
                
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Name</label>
                <input onChange={(b)=>{setname(b.target.value)}} type="text" className="form-control"/>
               
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Class</label>
                <input onChange={(b)=>{setclassn(b.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Parent Name</label>
                <input onChange={(b)=>{setparentname(b.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Mobile No</label>
                <input onChange={(b)=>{setmobileno(b.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Address</label>
               <textarea onChange={(b)=>{setaddress(b.target.value)}} name="" id="" cols="30" rows="10" class="form-control"></textarea>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subdata} className="btn btn-success">SUBMIT</button>

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addstudent