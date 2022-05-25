import React, { useState } from 'react'

const Addfaculty = () => {
    var[name,setname]=useState("")
    var[education,seteducation]=useState("")
    var[mobileno,setmobileno]=useState("")
    var[address,setaddress]=useState("")
    var[pincode,setpincode]=useState("")
    var[district,setdistrict]=useState("")
    const subdata=()=>{
        const data={"name":name,"education":education,"mobileno":mobileno,"address":address,"pincode":pincode,"district":district}
        console.log(data)
    }
  return (
    <div>
        <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
           
            
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Name</label>
                <input onChange={(b)=>{setname(b.target.value)}} type="text" className="form-control"/>
               
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Education</label>
                <input onChange={(b)=>{seteducation(b.target.value)}} type="text" className="form-control"/>
            </div>
           
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Mobile No</label>
                <input onChange={(b)=>{setmobileno(b.target.value)}} type="text" className="form-control"/>
            </div>
           
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Address</label>
               <textarea onChange={(b)=>{setaddress(b.target.value)}} name="" id="" cols="30" rows="10" class="form-control"></textarea>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Pincode</label>
                <input onChange={(b)=>{setpincode(b.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">District</label>
                <select onChange={(b)=>{setdistrict(b.target.value)}} name="" id="" class="form-control">
    <option value="pathanamthitta">pathanamthitta</option>
    <option value="Kannur">Kannur</option>
    <option value="Kasargodu">Kasargodu</option>
    <option value="Wayanda">Wayanda</option>
    <option value="Idukki">Idukki</option>
    <option value="Kollam">Kollam</option>
    <option value="Thrissur">Thrissur</option>
    <option value="Palakkad">Palakkad</option>
    <option value="Eranakulam">Eranakulam</option>
    <option value="Alapuzha">Alapuzha</option>
    <option value="Kozhikode">Kozhikode</option>
    <option value="Trivandrum">Trivandrum</option>
    <option value="Malapuram">Malapuram</option>
    <option value="Kottayam">Kottayam</option>
</select>

   
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subdata}  className="btn btn-success">SUBMIT</button>

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addfaculty