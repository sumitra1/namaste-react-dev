 import { LOGO_URL } from "../utils/constants";
 import { useState } from "react";
 import {Link} from 'react-router-dom';

 const Header = () => {

  const [isLoggedInUser,setIsLoggedInUser]=useState(true)
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about">
            <li>About Us</li></Link>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
          </ul>
        </div>
        {
          isLoggedInUser?<button onClick={()=>{setIsLoggedInUser(!isLoggedInUser)}}>Login</button>:<button onClick={()=>{setIsLoggedInUser(!isLoggedInUser)}}>Logout</button>
        }    
      </div>
    );
  };

  export default Header;