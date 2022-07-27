import React from "react";
import sit from "../assests/sit.png"
const Navbar = () =>{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mx-auto">

      
        <nav className="navbar navbar-expand-lg bg-blue">
  <div className="container-fluid">
    <a className="navbar-brand px-5" href="/"><img src={sit} style={{width:"4.5rem",height:"4.5rem",marginBottom:"1rem"}}></img>M-Apps Club</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
        <li className='nav-item px-2'>
          <a className="nav-link" aria-current="page" href="#header">Home</a>
        </li>
        <li className='nav-item px-2'>
          <a className="nav-link" href="#about_us">About</a>
        </li>
        <li className='nav-item px-2'>
          <a className="nav-link" href="#works">Works</a>
        </li>
        <li className='nav-item px-2'>
          <a className="nav-link" href="#activity">Activities</a>
        </li>
        <li className='nav-item px-2'>
          <a className="nav-link" href="#contact">Contact</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
</div>
            </div>
        </div>
        </>
    )
}

export default Navbar;