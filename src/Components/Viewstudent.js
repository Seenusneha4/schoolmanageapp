import React from 'react'
import Header from './Header'

const Viewstudent = () => {
    var studentlist=[{"admno":"1A","rollno":"1","name":"Evaniya","classn":"10","parentname":"Sneha","mobileno":"1234567890","address":"KZY"},
    {"admno":"2A","rollno":"2","name":"Aron","classn":"9","parentname":"Shilpa","mobileno":"0987653211","address":"PTA"},
    {"admno":"3A","rollno":"3","name":"Aden","classn":"7","parentname":"Josmy","mobileno":"1122443355","address":"KANNUR"},
    {"admno":"4A","rollno":"4","name":"Deksha","classn":"2","parentname":"Preetha","mobileno":"4563217890","address":"RANNY"},
    {"admno":"5A","rollno":"5","name":"Arpitha","classn":"4","parentname":"Jaisy","mobileno":"3451279086","address":"PLKD"}
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
      <th scope="col">ADMISSION NO</th>
      <th scope="col">ROLL NO</th>
      <th scope="col">NAME</th>
      <th scope="col">CLASS</th>
      <th scope="col">PARENT NAME</th>
      <th scope="col">MOBILE NO</th>
      <th scope="col">ADDRESS</th>
    </tr>
  </thead>
  <tbody>
      {studentlist.map((value,key)=>{return<tr>
    
      
      
      <td>{value.admno}</td>
      <td>{value.rollno}</td>
      <td>{value.name}</td>
      <td>{value.classn}</td>
      <td>{value.parentname}</td>
      <td>{value.mobileno}</td>
      <td>{value.address}</td>
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

export default Viewstudent