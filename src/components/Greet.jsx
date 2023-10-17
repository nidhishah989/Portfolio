import React from "react";

function Greet(props){
  
    return(
        <div>
            <span>{props.name}  </span>
            <span>{props.filename}  </span>
            {props.children[0]}
            {props.children[1]}
        </div>
    )
}

export default Greet;