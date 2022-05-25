import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link  class="navbar-brand"  to="/">SCHOOL MANAGE APP</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" to="/">Add Student</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/searchstu">Search student</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/addfac">Add Faculty</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/searchfac">Search Faculty</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/viewstu">view Student</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/viewfac">View Faculty</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    </div>
</div>
    </div>
  )
}

export default Header