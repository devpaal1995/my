import "./Navbar.css"
import { Link } from 'react-router-dom';
function Navbar(){
    return(
    <>

<nav className="nav navbar-light bg-info text-dark">
  

  
        <li className='nav-item navitem'>
            <Link to="/" style={{textDecoration: "none"}}><h3>HOME</h3></Link>
        </li>
        <li className='nav-item'>
            <Link to="/about" style={{textDecoration: "none"}}><h3>ABOUT</h3></Link>
        </li>
        <li  className='nav-item'>
        <Link to="/qualification" style={{textDecoration: "none"}}><h3>QUALIFICATION</h3></Link>
        </li>

        <li  className='nav-item'>
        <Link to="/contact" style={{textDecoration: "none"}}><h3>CONTACTS</h3></Link>
        </li>

</nav>
   
    </>
    )
}

export default Navbar