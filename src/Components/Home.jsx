import React from "react";
import app from "../../src/assests/app1.png";
import ScrollToTop from "react-scroll-to-top";

const Home = () =>{
    return (
        <>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1 className="mx-auto">Sri Sai Ram Institute of Technology</h1>
                            <h5>Autonomous|Approved by AICTE, New Delhi|{"\n"}Affilated to Anna University, Chennai|An ISO 9001:2015 Certified Institution|Accredited by NBA|NAAC Accredited 'A+' Grade</h5>
                            <h2 className="mx-auto">M-Apps Club</h2>
                            <div>
                                <a href="https://airtable.com/shrwShbuHVhrFPQBb" className="btn-get-started mx-auto">Let's Start</a>
                            </div>
                        </div>
		            
                    <div className="col-lg-6 order-1 order-lg-2  header-img">
                        <img src={app} className="img-fluid animated " alt="homeimg"/>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            <ScrollToTop smooth />
            </section>
        </>
    )
}
export default Home;