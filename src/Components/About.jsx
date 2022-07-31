import React from "react";
import Card1 from "./Card1";
import Sdata1 from "./Sdata1";
import Sdata3 from "./Sdata3";
import Sdata4 from "./Sdata4";
import Sdata5 from "./Sdata5";
import Sdata6 from "./Sdata6";
import CountUp from "react-countup";

const About = () =>{
    return (
        <>
        <div id="about_us">
            <div className="my-5">
                <h1 className="text-center">About Us</h1>
                <p className="my-3 p1">The Department of Computer Science and Engineering provides you with a large platform for your creativity by hosting a Website where you can introduce your mobile application, and high-caliber applications will be introduced on the Google Play store.</p>
                <h2 className="text-center">Vision</h2>
                <p className="my-3 p2">Expose the student community to the development of mobile Applications for it is the wide way to impact the society wherein the future lies.</p>
            </div>
            <div className="container-fluid mb-5">
                <h2 className="text-center">Mission</h2>
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
            <div className="container-fluid mb-5">
                <h2 className="text-center">Long Term Goals (5 Years)</h2>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                         {
                           Sdata3 .map((val, ind)=>{
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
            <div className="container-fluid mb-5">
                <h2 className="text-center">Short Term Goals (2 Years)</h2>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                         {
                           Sdata4 .map((val, ind)=>{
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
            <div className="container-fluid mb-5">
                <h2 className="text-center">SDG Goals (Associated)</h2>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                         {
                           Sdata5 .map((val, ind)=>{
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
            <div className="container-fluid mb-5">
                <h2 className="text-center">No. Of. Members</h2>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <div className="col-md-3 col-10 mx-auto">
                                <div class="card mb-3 h-100">
                                    <h4>Faculty</h4>
                                    <div class="card-body">
                                        <h5 class="card-title" style={{fontSize:"1.15rem"}}>6</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-10 mx-auto">
                                <div class="card mb-3 h-100">
                                    <h4>Student</h4>
                                    <div class="card-body">
                                        <h5 class="card-title" style={{fontSize:"1.15rem"}}>425</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <h2>Achievements</h2>
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
          
            </div>
            </>
    )
}
export default About;