import React from 'react'
import "../../App.css";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <>
        {/* header line start */}
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
    {/* Logo and Heading */}
    <div className="d-flex flex-column flex-md-row align-items-center gap-2">
      <a className="navbar-brand">
        <img src="/images/main__logo.jpg" height={50} width={140} alt="Logo" />
      </a>
     
    </div>
    <a className="navbar-brand nav1-heading" style={{ color: "var(--light-green)" }}>
        One Stop Solution
      </a>

    {/* Buttons */}
    <div className="d-flex  gap-2 mt-2 mt-md-0">
      <Link to = "/Register"><button className="btn btn-outline-success" type="button">Register</button></Link>
     <Link to = "/login"> <button className="btn btn-outline-success" type="button">Login</button></Link>
    </div>
  </div>
</nav>


        {/* header line end */}
      <nav className="navbar navbar-expand-lg navbar-light navbar-conatiner" style={{backgroundColor: "var(--dark-green)"}}>
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <Link to = "/" className="nav-link active" aria-current="page" style={{color: "var(--offWhite)"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to = "/Transportation" className="nav-link" href="#">Transportation</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Consultancy
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <Link  to= "/Consulting"className="nav-link"  tabindex="-1">Consultancy</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to = "/labtesting" tabindex="-1">Lab Testing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to = "/Seed_Compost" tabindex="-1">Seeds and Compost</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#" tabindex="-1">FPO</a>
        </li>
        <li className="nav-item">
          <Link to = "/weatherforcast" className="nav-link " href="#" tabindex="-1">Weather Forecast</Link>
        </li>
       
        <li className="nav-item">
          <Link to='/Contact-Page' className="nav-link "  tabindex="-1">Contact US</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
</>
    </div>
  )
}

export default Navbar
