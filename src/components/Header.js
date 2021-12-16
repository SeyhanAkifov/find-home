import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import "../Styles/Header.css";

function Header({ setUserInfo }) {
  const userInfo = useContext(AuthContext);
  let token = userInfo.token;
  let username = userInfo.email;
  let navigate = useNavigate();

  const Logout = (e) => {
    e.preventDefault();

    setUserInfo({ isAuthenticated: false, email: null, token: null });
    navigate({ pathname: "/home" });
  };

  return (
    <>
  
      <header className="header-nav menu_style_home_one navbar-scrolltofixed stricky main-menu">
        <div className="container-fluid p0">
          <nav>
            <div className="menu-toggle">
              <img
                className="nav_logo_img img-fluid"
                src="/images/header-logo2.png"
                alt="header-logo.png"
              ></img>

              <button type="button" id="menu-btn">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <Link to="/home" className="navbar_brand float-left dn-smd">
              <img
                className="logo1 img-fluid"
                src="/images/header-logo.png"
                alt="/header-logo.png"
              ></img>
              <img
                className="logo2 img-fluid"
                src="/images/header-logo2.png"
                alt="header-logo2.png"
              ></img>
              <span>FindHome</span>
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
              {token ? (
                <>
                  <li className="list-inline-item list_s">
                    <Link
                      to="#"
                      className="btn flaticon-user"
                      data-toggle="modal"
                      data-target=".bd-example-modal-lg"
                    >
                      {token ? username : "Login/Register"}
                    </Link>
                  </li>
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
      </header>
    </>
  );
}

export default Header;
