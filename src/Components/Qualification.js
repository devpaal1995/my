

import Dev from "./Dev.png";
import Cer from "./Cer.png";
import edu from "./edu.png";
import book from "./book.png";

export default function Qualification (){
     return (
    <>
    <div className="container-fluid text-center grid-container" >
      <div className="row">
      <div className="col imgn">
      <img src={book} className="img-responsive" width="150" height="100"/>
      
      <h4>10 High School</h4>
      <p>Nalanda Vidhaylya Niketan H.S School Indore.</p>
      </div>

      <div className="col imgn">
      <img src={book} className="img-responsive" width="150" height="100"/>
      <h4>12 Higher Secondary School</h4>
      <p>MotherLand Higher Secondary School Sukhaliya Indore.</p>
      </div>
      <div className="w-80  my-2" ></div>

      <div className="col imgn">
      <img src={edu} className="img-responsive" width="150" height="100"/>
      <h4>B.E Civil Engineering</h4>
      <p>I have completed B.E from Rgpv University.</p>
      </div>

      <div className="col imgn">
      <img src={Cer} className="img-responsive" width="150" height="100"/>
      <h4>Full Stack Development Certificate</h4>
      <p>I have Completed FSD course as well as Training at BOARD INFINTY. </p>
      </div>

      </div>
    </div>
   </>


     )
}