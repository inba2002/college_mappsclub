import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";


const Works = () =>{
    return (
        <>
        <div id="works">
        <div className="my-5">
                <h1 className="text-center" style={{fontWeight:"bolder",fontFamily:"Merriweather",fontSize:"3rem"}}>Works</h1>
            </div>      
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                         {
                           Sdata .map((val, ind)=>{
                                return <Card key={ind}
                                imgUrl={val.imgUrl}
                                app={val.app}
                                name={val.student}
                                coll={val.college}
                                year={val.year}
                                dept={val.dept}
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
export default Works;