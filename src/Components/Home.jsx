import React from "react";
import app from "../../src/assests/app1.png";
import ScrollToTop from "react-scroll-to-top";

const Home = () =>{
    return (
        <>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-9 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>Sri Sai Ram Institute of Technology</h1>
                            <h2>(Autonomous)</h2>
                            <h3 className="my-3">Department Of Computer Science and Engineering</h3>
                            <div className="mt-3">
                                <a href="https://airtable.com/shrwShbuHVhrFPQBb" className="btn-get-started">Let's Start</a>
                            </div>
                        </div>
		            
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={app} className="img-fluid animated" alt="homeimg"/>
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