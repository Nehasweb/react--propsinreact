import React from "react";

const Movies = ({name, time})=>
{
    return (<>
           <h3>Second method to use props</h3>
          <h1>{name}</h1>
          <h2>{time}</h2>
    </>)
}

export default Movies ;