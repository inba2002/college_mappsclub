import React from "react";
import Card1 from "./Card1";
import Sdata1 from "./Sdata1";
import CountUp from "react-countup";

const About = () =>{
    return (
        <>
        <div id="about_us">
            <div className="my-5">
                <h1 className="text-center">About Us</h1>
                <p className="my-3 p1">The Department of Computer Science and Engineering provides you with a large platform for your creativity by hosting a Website where you can introduce your mobile application, and high-caliber applications will be introduced on the Google Play store.</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row">
                            <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <span className="sub_counter1"style={{fontSize:"1.5rem",fontWeight:"1000"}}>
                                <CountUp start={0} end={25} duration={2.4}/>
                            </span>
                            <p className="counter_title1"style={{fontSize:"1.5rem",fontWeight:"400"}}>Apps Launched</p>
                            </div>
                            <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <span className="sub_counter2"style={{fontSize:"1.5rem",fontWeight:"1000"}}>
                                <CountUp start={0} end={53} duration={2.3}/>
                            </span>
                            <p className="counter_title2 " style={{fontSize:"1.5rem",fontWeight:"400"}}>Apps Created</p>
                            </div>
                            <div className="col-md-4 pt-5 pt-lg-1 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <span className="sub_counter3" style={{fontSize:"1.5rem",fontWeight:"1000"}}>
                                <CountUp start={0} end={44} duration={2.3}/>
                            </span>
                            <p className="counter_title3"style={{fontSize:"1.5rem",fontWeight:"400"}}>Certificates Received</p>
                            </div>
		                </div>
                        </div>
                </div>
            </div>      
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                         {
                           Sdata1 .map((val, ind)=>{
                                return <Card1 key={ind}
                                imUrl={val.imUrl}
                                content={val.content}
                                />
                            })
                         }
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </>
    )
}
export default About;