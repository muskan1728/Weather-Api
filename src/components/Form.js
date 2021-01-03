import React from "react";
import "./form.css";
function Form(props){
    return(
        <>
        <div className="container" >
                <form  onSubmit={props.loadweather}>
                    <div className="row">
                        <div >
                            <input className="col-md-3 offset-md-2" type="text" name="city" placeholder="city" />
                            <input className="col-md-3"type="text" name="country" placeholder="country" />
                            <button className="col-md-3 mt-md-0 text-md-left">Weather</button>
                        </div>
                        
                    </div>
            </form>
            
        </div>
        </>
    )
}
export default Form;