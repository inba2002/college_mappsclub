import React from "react";

const Card1 = (props) =>{
    return (
        <>
            <div className="col-md-3 col-10 mx-auto">
            <div class="card mb-3 h-100">
                <img src={props.imUrl} class="card-img" alt={props.imUrl} style={{width:"12%"}}></img>
                    <div class="card-body">
                        <h5 class="card-title" style={{fontSize:"1.15rem"}}>{props.content}</h5>
                    </div>
            </div>
            </div>
                        
            </>
    )
}
export default Card1;