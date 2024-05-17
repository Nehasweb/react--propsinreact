import React from 'react'


function Contact(props)
{
    return (<><h1>Contact...!(Functional Component) </h1>
    <input type="text"/>
    <button>Click</button>
    <h2>My Name is {props.myname}</h2>

    </>)
    
}


export default Contact;