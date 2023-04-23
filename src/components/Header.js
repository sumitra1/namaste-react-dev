 import { LOGO_URL } from "../utils/constants";
 import { useState } from "react";

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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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