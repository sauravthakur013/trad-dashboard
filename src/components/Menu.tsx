import { Flag } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const [openProfile, setOpenProfile] = useState<Boolean>(false);

  function handleProfileClick(event:any) {
    event.preventDefault();
    event.stopPropagation();
    setOpenProfile(!openProfile);
  }

  const logOutClick = (event:any) => {
    event.preventDefault();
    event.stopPropagation();
    setOpenProfile(false)
    // localStorage.removeItem("token");
    // window.location.href = "/login";
    console.log("LogOut")
  }
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/home"
              style={{
                fontWeight: location.pathname.includes("home")
                  ? "bold"
                  : "normal",
                textDecoration: "none",
              }}
            >
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link
              to="/orders"
              style={{
                fontWeight: location.pathname.includes("orders")
                  ? "bold"
                  : "normal",
                textDecoration: "none",
              }}
            >
              <p>Orders</p>
            </Link>
          </li>
          <li>
          <Link
              to="/holdings"
              style={{
                fontWeight: location.pathname.includes("holdings")
                  ? "bold"
                  : "normal",
                textDecoration: "none",
              }}
            >
              <p>Holdings</p>
            </Link>
          </li>
          <li>
          <Link
              to="/positions"
              style={{
                fontWeight: location.pathname.includes("positions")
                  ? "bold"
                  : "normal",
                textDecoration: "none",
              }}
            >
              <p>Positions</p>
            </Link>
            
          </li>
          <li>
          <Link
              to="/funds"
              style={{
                fontWeight: location.pathname.includes("funds")
                  ? "bold"
                  : "normal",
                textDecoration: "none",
              }}
            >
              <p>Funds</p>
            </Link>
            
          </li>
          <li>
          <Link
              to="/apps"
              style={{
                fontWeight: location.pathname.includes("apps")
                  ? "bold"
                  : "normal",
                textDecoration: "none",
              }}
            >
              <p>Apps</p>
            </Link>
           
          </li>
        </ul>
        <hr />
        <div
          className="profile"
          onClick={(e) =>  {handleProfileClick(e);}}
        >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
          {openProfile &&  <div id='dropDown'>
              <div className="dropDownItem">Profile</div>
              <div className="dropDownItem">Help</div>
              <div className="dropDownItem">FAQ</div>
              <div className="dropDownItem">Settings</div>
              <div className="dropDownItem" onClick={(e) => {logOutClick(e);}}>Logout</div>
          </div>}
         
        </div>
      </div>
    </div>
  );
};

export default Menu;

