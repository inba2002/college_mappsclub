import React from "react";
import sit1 from "../assests/logo/club.png"

const Foter = () =>{
    return (
        <>
        <div id="footer"className="container my-5">
            <div className="footer text-center text-lg-start text-white">
              <div className="container p-4 pb-0">
                <section className="">
                  <div className="row">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 text-black" style={{fontSize:"1.5rem",fontVariant:"small-caps",fontWeight:"bolder"}}><img src={sit1} className="imag1" style={{width:"6rem",heigth:"4rem"}}></img>M-Apps Club</h6>
                      <p className="text-black" style={{fontSize:"1.24rem",fontVariant:"small-caps",fontWeight:"bolder"}}>SRI SAI RAM INSTITUTE OF TECHNOLOGY</p>
                    </div>
                    <hr className="w-100 clearfix d-md-none"/>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 text-black" style={{fontSize:"1.24rem",fontVariant:"small-caps"}}>Address</h6>
            <p className="text-black">Sairam College Rd, Sai Leo Nagar,Tambaram West, Chennai, Tamil Nadu 600044</p>
            <p className="text-black">Phone: 044 4226 7777</p>
          </div>
  
        </div>
  
      </section>
    

      <hr className="my-3"/>

    
      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center ">
      
          <div className="col-md-12 col-lg-12 text-center text-md-start">

              
              <p style={{color:"black",textAlign:"center"}}>©<a className="text-blue" href="https://www.linkedin.com/in/s-inbasekar-507476199/">WebDev</a> 2022, Chennai. All rights reserved</p>
           
           
          </div>
                  </div>
                </section>
              </div>
            </div>
        </div>
        </>
    )
}
export default Foter;





