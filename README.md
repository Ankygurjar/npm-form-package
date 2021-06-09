<h2>Features : </h2>
This package is designed to use for React based UI application where you can retrieve data from a form just by passing the form to the package's methods.

<h2>How to Use : </h2>
Your system need to have NPM installed.
Run <code>npm install react-form-init</code>

Go to your <code>src</code> folder and iniside your form components : <br/>
<code>
import React, { useState } from 'react'
import { getData, getErrors } from 'react-form-init';

function Home() {
    const [ data, setData ] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault();
        let doc = document.getElementById("form");
        setData(getData(doc))// getData() function will return the data inside the form passed.
    } 

    return (
        <div>
            <form id="form" onSubmit={handleSubmit}>
                <input type="text" id="lname" placeholder="Enter your First name" />
                <input type="text" id="fname" placeholder="Enter your Last Name" />
                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}

</code>
