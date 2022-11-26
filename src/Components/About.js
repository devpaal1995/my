import Git from "./Git.png"
import facebook from "./facebook.png"
import linkdin from "./linkdin.png"
import Insta from "./Insta.png"
import "./Home.css"
import React from "react"


function About(){
    return(
    <>
    <div className="container-fluid text-center center-block">
    
        
        <ul>
            <li> <h6>Name:          Devendra Kumar Pal </h6></li>
            <li><h6>Date Of Birth:  01/01/1995</h6></li>
            <li><h6>Father Name:    Mr Ramdas Pal</h6></li>
            <li><h6>Mother Name:    Ms Sarita Pal</h6></li>
            <li><h6>Adhar Card:    665706347163</h6></li>
            <li><h6>Passport No:   S3110883</h6></li>
            <li><h6>Adress: 96 -   Shree Ram Nagar Indore Near Hawabanglow</h6></li>
            <li><h6>Hobbies:       Travelling, Talking to my parents</h6></li>
            <br/>

        </ul>

        <div>
         <img src={facebook}  className="img-fluid" height="30px" width="30px" ></img>
         <img src={Insta} className="img-fluid"  height="30px" width="30px"></img>
         <img src={linkdin} className="img-fluid"  height="30px" width="30px"></img>
         <img src={Git} className="img-fluid"  height="30px" width="30px"></img>
        
        </div>     
    </div>

    
    </>
    )
}

export default About;