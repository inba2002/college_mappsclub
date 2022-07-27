import React from "react";
import Carousel1 from "./carousel1";
import Sdata2 from "./Sdata2";

const Activities = () =>{
    return (
        <div id="activity"className="container-fluid nav_bg">
            <h2 style={{fontWeight:"bolder",fontFamily:"Merriweather",fontSize:"3rem"}}>Activities</h2>
            <div className="row">
                <div className="col-10 mx-auto">
                    {
                        <Carousel1/>
                    
                    }
                </div>
            </div>
        </div>
    )
}
export default Activities;