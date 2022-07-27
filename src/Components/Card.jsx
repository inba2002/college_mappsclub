import React from "react";

const Card = (props) =>{
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgUrl} className="card-img-top w-50 mx-auto my-3" alt={props.imgUrl}/>
                    <div className="card-body">
                        <h4 className="card-title font-weight-bold">{props.app}</h4>
                            <h5 className="card-subtitle">{props.name}</h5>
                            <p className="card-text">{props.dept}</p>
                            <p className="card-text">{props.coll}</p>
                            <p className="card-text">{props.year}</p>
                            
                    </div>
                </div>
            </div>
                        
            </>
    )
}
export default Card;