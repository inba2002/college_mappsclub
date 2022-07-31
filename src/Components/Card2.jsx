import React from "react";

const Card2 = (props) =>{
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card">
                    <h5 class="card-header">{props.role}</h5>
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">{props.dept}</p>
                        <p class="card-text">{props.contact}</p>
                        <a href={props.email}>{props.email}</a>
                    </div>
            </div>
            </div>
        </>
    )
}
export default Card2;