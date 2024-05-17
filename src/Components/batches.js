import React from "react";

const Batches = (props)=>
{
    return (<>
         <h3>First mehtod to use props</h3>
          <h1>{props.name}</h1>
          <h2>{props.price}</h2>
    </>)
}

export default Batches ;