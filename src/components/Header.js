import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function Header({ navChange }) {
  let loggedIn = false;
  let username = "Seyhan";
  const onClickHandler = (e) => {
    e.preventDefault();

    if (e.target.tagName == "Link") {
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
                <span className="title">Listing</span>
              </Link>
              </li>
            <li>
              <Link to="#">
                <span className="title">Property</span>
              </Link>
              <ul>
                <li>
                  <Link to="#">User Admin</Link>
                  <ul>
                    <li>
                      <Link to="page-dashboard.html">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="page-my-properties.html">My Properties</Link>
                    </li>
                    <li>
                      <Link to="page-message.html">My Message</Link>
                    </li>
                    <li>
                      <Link to="page-my-review.html">My Review</Link>
                    </li>
                    <li>
                      <Link to="page-my-favorites.html">My Favorites</Link>
                    </li>
                    <li>
                      <Link to="page-add-new-property.html">Add Property</Link>
                    </li>
                    <li>
                      <Link to="page-my-profile.html">My Profile</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Listing Single</Link>
                  </li>
                <li>
                  <Link to="page-add-new-property.html">Create Listing</Link>
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
