import React, { useState } from 'react'

const Searchstudent = () => {
    var[admno,setadmno]=useState("")
    const subdata=()=>{
        const data={"admno":admno}
        console.log(data)
    }
  return (
    <div>

<div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label for="" className="form-label">Admission No</label>
              <input onChange={(b)=>{setadmno(b.target.value)}} type="text" className="form-control"/>
            </div>
            
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subdata} className="btn btn-success">SEARCH</button>

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Searchstudent