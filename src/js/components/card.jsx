import React from "react";
const Card=({digito}) => {
    return(
        <div className="card mb-3 bg-dark m-1" style={{width:"6rem", height:"6rem"}}>
            <h1 className="mt-4 card-title text-center text-white">{digito}</h1>
        </div>
    )
}

export default Card