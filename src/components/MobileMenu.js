import { Link } from "react-router-dom";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
  

function MobileMenu({ setUserInfo }) {
    const userInfo = useContext(AuthContext);
    let navigate = useNavigate();
    let token = userInfo.token;
    let username = userInfo.email;

    

    const Logout = (e) => {
        e.preventDefault();
    
        setUserInfo({ isAuthenticated: false, email: null, token: null });
        navigate({ pathname: "/home" });
      };

    return (
        <div id="page" className="stylehome1 h0">
        <div className="mobile-menu">
          <div className="header stylehome1">
            <div className="main_logo_home text-center">
              <img
                className="nav_logo_img img-fluid mt20"
                src="/images/header-logo2.png"
                alt="header-logo.png"
              />
              <span className="mt20">FindHome</span>
            </div>
            
                  <span className="flaticon-user"></span>
                  <span >{username}</span>
                
            <ul className="menu_bar_home2">
              <li className="list-inline-item list_s">
                <div>
                  <span className="flaticon-user"></span>
                  <span >{username}</span>
                </div>
              </li>
              <li className="list-inline-item">
                <a href="#menu">
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav id="menu" className="stylehome1">
          <ul >
            <li>
              <Link to="/home">
                <span className="title">Home</span>
              </Link>
            </li>
            {token ? (
              <>
                <li>
                  <Link to="/create">
                    <span className="title">Add Property</span>
                  </Link>
                </li>
                <li className="last">
                  <Link to="/myProperties">
                    <span className="title">My Properties</span>
                  </Link>
                </li>
                <li className="last">
                  <Link to="/myLiked">
                    <span className="title">My Favorite</span>
                  </Link>
                </li>
                <li className="last" onClick={Logout}>
                  <Link to="#">
                    <span className="title">LogOut</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
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
              </>
            )}

            <li className="last">
              <Link to="page-contact.html">
                <span className="title">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default MobileMenu