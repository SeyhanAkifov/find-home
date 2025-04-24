"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth, AuthProvider } from "../contexts/AuthContext";
import "../Styles/Header.css";

function Header() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { token, username } = user || {};

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    router.push("/home"); // Navigate to the home page after logout
  };

  return (
    <header className="header-nav menu_style_home_one navbar-scrolltofixed stricky main-menu">
      <div className="container-fluid p0">
        <nav>
          <div className="menu-toggle">
            <img
              className="nav_logo_img img-fluid"
              src="/images/header-logo2.png"
              alt="header-logo.png"
            />
            <button type="button" id="menu-btn">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <Link href="/home" className="navbar_brand float-left dn-smd">
            <img
              className="logo1 img-fluid"
              src="/images/header-logo.png"
              alt="/header-logo.png"
            />
            <img
              className="logo2 img-fluid"
              src="/images/header-logo2.png"
              alt="header-logo2.png"
            />
            <span>FindHome</span>
          </Link>

          <ul
            id="respMenu"
            className="ace-responsive-menu text-right"
            data-menu-style="horizontal"
          >
            <li>
              <Link href="/home">
                <span className="title">Home</span>
              </Link>
            </li>
            {token ? (
              <>
                <li className="last">
                  <Link href="/myMessages">
                    <i className="far fa-envelope"></i>
                  </Link>
                </li>
                <li className="list-inline-item list_s">
                  <Link
                    href="/myProfile"
                    className="btn flaticon-user"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                  >
                    {username || "Login/Register"}
                  </Link>
                </li>
                <li>
                  <Link href="/create">
                    <span className="title">Add Property</span>
                  </Link>
                </li>
                <li className="last">
                  <Link href="/myProperties">
                    <span className="title">My Properties</span>
                  </Link>
                </li>
                <li className="last">
                  <Link href="/myLiked">
                    <span className="title">My Favorite</span>
                  </Link>
                </li>
                <li className="last" onClick={handleLogout}>
                  <a href="#">
                    <span className="title">LogOut</span>
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="last">
                  <Link href="/login">
                    <span className="title">Login</span>
                  </Link>
                </li>
                <li className="last">
                  <Link href="/register">
                    <span className="title">Register</span>
                  </Link>
                </li>
              </>
            )}

            <li className="last">
              <Link href="/contact">
                <span className="title">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
