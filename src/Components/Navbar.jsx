import React from "react";
import sit from "../assests/sit.png"
import sit1 from "../assests/logo/club.png"
import sit2 from "../assests/logo/founder.png"
import sit3 from "../assests/logo/logo1.png"
const Navbar = () =>{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mx-auto">

      
        <nav className="navbar navbar-expand-lg bg-blue">
  <div className="container-fluid">
    <a className="navbar-brand px-4" href="/"><img src={sit}></img><img src={sit1} className="imag1"></img><img src={sit2} className="imag2"></img><img src={sit3} className="imag3"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
        <li className='nav-item px-1'>
          <a className="nav-link" aria-current="page" href="#header">Home</a>
        </li>
        <li className='nav-item px-1'>
          <a className="nav-link" href="#about_us">About</a>
        </li>
        <li className='nav-item px-1'>
          <a className="nav-link" href="#works">Works</a>
        </li>
        <li className='nav-item px-1'>
          <a className="nav-link" href="#activity">Activities</a>
        </li>
        <li className='nav-item px-1'>
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