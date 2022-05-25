import React from 'react'
import Header from './Header'

const Viewfaculty = () => {
    var facultylist=[{"name":"Malavika","education":"MCA","mobile":"1234567890","address":"ABCD","pincode":"689641","district":"pathanamthitta"},
    {"name":"Arun","education":"MBA","mobile":"0987654321","address":"CDEF","pincode":"689646","district":"kollam"},
    {"name":"Aravindh","education":"MSC","mobile":"6789054321","address":"JKRT","pincode":"689649","district":"kannur"},
    {"name":"Sharan","education":"MCOM","mobile":"0987543216","address":"YQER","pincode":"689642","district":"idukki"},
    {"name":"Deepak","education":"MA","mobile":"0129384756","address":"KLWE","pincode":"689645","district":"wayanad"}
]
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">EDUCATION</th>
      <th scope="col">MOBILE NO</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">PINCODE</th>
      <th scope="col">DISTRICT</th>
      
    </tr>
  </thead>
  <tbody>
      {facultylist.map((value,key)=>{return<tr>
    
      
      
      <td>{value.name}</td>
      <td>{value.education}</td>
      <td>{value.mobile}</td>
      <td>{value.address}</td>
      <td>{value.pincode}</td>
      <td>{value.district}</td>
      
    </tr>
})}
  </tbody>
</table>
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewfaculty