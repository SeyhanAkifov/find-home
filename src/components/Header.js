import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";

function Header({ setToken }) {
  let loggedIn = false;
  let username = "Seyhan";
  let navigate = useNavigate();
  

  const Logout = (e) => {
    e.preventDefault()
    setToken('asasas');
    
    navigate({ pathname: "/home" });

  }

  return (
    <header className="header-nav menu_style_home_one navbar-scrolltofixed stricky main-menu">
      <div className="container-fluid p0">
        <nav>
          <div className="menu-toggle">
            <img
              className="nav_logo_img img-fluid"
              src="images/header-logo.png"
              alt="header-logo.png"
            ></img>

            <button type="button" id="menu-btn">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <Link to="#" className="navbar_brand float-left dn-smd">
            <img
              className="logo1 img-fluid"
              src="images/header-logo.png"
              alt="header-logo.png"
            ></img>
            <img
              className="logo2 img-fluid"
              src="images/header-logo2.png"
              alt="header-logo2.png"
            ></img>
            <span>FindHouse</span>
          </Link>
          <ul
            id="respMenu"
            className="ace-responsive-menu text-right"
            data-menu-style="horizontal"
          >
            <li>
              <Link to="/home">
                
                  <span className="title">Home</span>
                
              </Link>
            </li>
            <li>
              <Link to="/create">
                
                  <span className="title">Add Property</span>
                
              </Link>
            </li>
            
            
            <li>
              <Link to="#">
                <span className="title">Pages</span>
              </Link>
              </li>
            <li>
              <Link to="#">
                <span className="title">Blog</span>
              </Link>
              </li>
            <li className="last">
              <Link to="page-contact.html">
                <span className="title">Contact</span>
              </Link>
            </li>
            <li className="last">
              <Link to="/login">
                <span className="title">Login</span>
              </Link>
            </li>
            <li className="last" onClick={Logout}>
              <Link to="#">
                <span className="title">LogOut</span>
              </Link>
            </li>
            <li className="last">
              <Link to="/register">
                <span className="title">Register</span>
              </Link>
            </li>
            <li className="last">
              <Link to="/details/2">
                <span className="title">Details</span>
              </Link>
            </li>
            <li className="list-inline-item list_s">
              <Link
                to="#"
                className="btn flaticon-user"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                <span className="dn-lg">
                  {loggedIn ? "Login/Register" : username}
                </span>
              </Link>
            </li>
            <li className="list-inline-item add_listing">
              <Link to="/create">Create Listing</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
