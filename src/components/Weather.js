import React, { useEffect, useState } from "react";
const key = "d0672f34cfc008066c8cc24d6a4c4084";
function Weather(props){
    return (
        <>
            <span style={{ textAlign: "center" ,color: "white"}}>
                {/* <div className="card" style={{border:0}}>
                    <div className="card-body"> */}
                        <span >{props.min_temp}&deg;</span> | <a>{props.max_temp}&deg;</a> |  <a> {props.description}</a>
                        <h2>{props.city} | {props.country}</h2>
                    {/* </div>
                </div> */}
            </span>
            {/* <a> {props.description}</a> */}

            {/* <i class="wi wi-day-sunny display-1"></i> */}
            {/* <i class="far fa-sun"></i> */}
        </>
    );
}
export default Weather;