import React from "react";
import Sdata2 from "./Sdata2";
import Card2 from "./Card2";

const Contact = (props) =>{
    return (
        <div id="contact" className="container-fluid nav_bg">
            <div className="my-5">
                <h1 className="text-center" style={{fontWeight:"bolder",fontFamily:"Merriweather",fontSize:"3rem"}}>Contact Us</h1>
            </div>    
            <div className="row gy-4">
                {
                           Sdata2 .map((val, ind)=>{
                                return <Card2 key={ind}
                                role={val.role}
                                name={val.name}
                                dept={val.dept}
                                email={val.email}
                                contact={val.contact}
                                />
                            })
                         }
		        </div>
            </div>
    )
}
export default Contact;