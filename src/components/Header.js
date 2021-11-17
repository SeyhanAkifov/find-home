import { useState, useEffect } from "react";

import { Route, Link, Switch } from "react-router-dom";

function Header({ navChange }) {
  let loggedIn = false;
  let username = "Seyhan";
  const onClickHandler = (e) => {
    e.preventDefault();

    if (e.target.tagName == "A") {
      let url = new URL(e.target.href);
      navChange(url.pathname);
    }
  };

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
          <a to="#" className="navbar_brand float-left dn-smd">
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
          </a>
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
              <Link to="#">
                <span className="title">Listing</span>
              </Link>
              </li>
            <li>
              <Link to="#">
                <span className="title">Property</span>
              </Link>
              <ul>
                <li>
                  <a to="#">User Admin</a>
                  <ul>
                    <li>
                      <a to="page-dashboard.html">Dashboard</a>
                    </li>
                    <li>
                      <a to="page-my-properties.html">My Properties</a>
                    </li>
                    <li>
                      <a to="page-message.html">My Message</a>
                    </li>
                    <li>
                      <a to="page-my-review.html">My Review</a>
                    </li>
                    <li>
                      <a to="page-my-favorites.html">My Favorites</a>
                    </li>
                    <li>
                      <a to="page-add-new-property.html">Add Property</a>
                    </li>
                    <li>
                      <a to="page-my-profile.html">My Profile</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Listing Single</Link>
                  </li>
                <li>
                  <a to="page-add-new-property.html">Create Listing</a>
                </li>
              </ul>
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
            <li className="last">
              <Link to="/register">
                <span className="title">Register</span>
              </Link>
            </li>
            <li className="last">
              <Link to="/details">
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
