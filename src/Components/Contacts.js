
import Dev from "./Dev.png";
import Mobile from "./Mobile.png";
import Mail from "./Mail.png";
import Office from "./Office.png";



export default function Contacts () {

    return (

        <>
       <div className="container-fluid text-center" >
        <h1 className="heading"> <span>Contact</span> Us</h1>

        <div className="row">
            <div className="col">
            <img src={Mobile} alt="" height="120" width="150" className="img-responsive" />
            <h4>Call us on</h4>
            <h6>7987014828, 7566233588</h6>
        
            </div>

            <div className="col">
            <img src={Mail} alt="" height="120" width="150" className="img-responsive" />
            <h4>Email Id </h4>
            <h6>Devendrapal181@gmail.com</h6>
            </div>

            <div className="col">
            <img src={Office} alt="" height="120" width="150" className="img-responsive" />
            <h4>Home town</h4>
            <h6>Indore Madhya Pradesh</h6>
            </div>


       
        </div>
       </div>

        </>
    )
}