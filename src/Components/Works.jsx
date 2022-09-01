import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import govt from "../assests/appicons/govt.png";

const Works = () =>{
    return (
        <>
        <div id="works">
        <div className="my-5">
                <h1 className="text-center" style={{fontWeight:"bolder",fontFamily:"Merriweather",fontSize:"3rem"}}>Works</h1>
            </div>      
            <div className="card-container">
                <div className="image-container">
                <a href="http://www.ngtmboard.com" className="ngtm"><img src={govt} alt='logo'/></a>
                </div>
                <div className="card-title">
               <h1>NGTM</h1>
                    <h4>(OnGoing)</h4>
                </div>
                <div className="card-body">
                    <h5>Plastic Free Tamil Nadu is a movement which is a larger than ever approach to curb plastic and related products’ pollution from the state. It envisions to create a large network of school students who will act as young ambassadors for the movement. This approach of inculcating sustainability in our state from the grass-root level would bear fruits in the years to come.</h5>
                </div>
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