import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import AuthContext from "../contexts/AuthContext";

function MyProfile() {
  let navigate = useNavigate();
  const { token, email } = useContext(AuthContext);

  useEffect(() => {
    if (!token) {
      navigate({
        pathname: "/login",
      });
    }
  }, [token, navigate]);

  return (
    <>
      <div className="dashboard_sidebar_menu dn-992">
        <ul className="sidebar-menu">
          <li className="header">
            <img src="images/header-logo2.png" alt="header-logo2.png" />{" "}
            FindHouse
          </li>
          <li className="title">
            <span>Main</span>
          </li>

          <li className="treeview">
            <Link to="/myMessages">
              <i className="flaticon-envelope"></i>
              <span> Message</span>
            </Link>
          </li>
          <li className="treeview">
            <a href="page-my-properties.html">
              <i className="flaticon-home"></i> <span>My Properties</span>
              <i className="fa fa-angle-down pull-right"></i>
            </a>
          </li>
          <li>
            <a href="page-my-favorites.html">
              <i className="flaticon-heart"></i> <span> My Favorites</span>
            </a>
          </li>
          <li>
            <a href="page-my-savesearch.html">
              <i className="flaticon-magnifying-glass"></i>{" "}
              <span>Saved Search</span>
            </a>
          </li>
          <li>
            <a href="page-login.html">
              <i className="flaticon-logout"></i> <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-xl-2 dn-992 pl0"></div>
            <div className="col-lg-9 col-xl-10 maxw100flex-992">
              <div className="row">
                <div className="col-lg-12">
                  <div className="dashboard_navigationbar dn db-992">
                    <div className="dropdown">
                      <button  className="dropbtn">
                        <i className="fa fa-bars pr10"></i> Dashboard Navigation
                      </button>
                      <ul id="myDropdown" className="dropdown-content">
                        <li>
                          <a href="page-dashboard.html">
                            <span className="flaticon-layers"></span> Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="page-message.html">
                            <span className="flaticon-envelope"></span> Message
                          </a>
                        </li>
                        <li>
                          <a href="page-my-properties.html">
                            <span className="flaticon-home"></span> My Properties
                          </a>
                        </li>
                        <li>
                          <a href="page-my-favorites.html">
                            <span className="flaticon-heart"></span> My Favorites
                          </a>
                        </li>
                        <li>
                          <a href="page-my-savesearch.html">
                            <span className="flaticon-magnifying-glass"></span>{" "}
                            Saved Search
                          </a>
                        </li>
                        <li>
                          <a href="page-my-review.html">
                            <span className="flaticon-chat"></span> My Reviews
                          </a>
                        </li>
                        <li>
                          <a href="page-my-packages.html">
                            <span className="flaticon-box"></span> My Package
                          </a>
                        </li>
                        <li className="active">
                          <a href="page-my-profile.html">
                            <span className="flaticon-user"></span> My Profile
                          </a>
                        </li>
                        <li>
                          <a href="page-add-new-property.html">
                            <span className="flaticon-filter-results-button"></span>{" "}
                            Add New Listing
                          </a>
                        </li>
                        <li>
                          <a href="page-login.html">
                            <span className="flaticon-logout"></span> Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb10">
                  <div className="breadcrumb_content style2">
                    <h2 className="breadcrumb_title">My Profile</h2>
                    <p>We are glad to see you again!</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="my_dashboard_review">
                    <div className="row">
                      <div className="col-xl-2">
                        <h4>Profile Information</h4>
                      </div>
                      <div className="col-xl-10">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="wrap-custom-file">
                              <input
                                type="file"
                                name="image1"
                                id="image1"
                                accept=".gif, .jpg, .png"
                              />
                              <label htmlFor="image1">
                                <span>
                                  <i className="flaticon-download"></i> Upload Photo{" "}
                                </span>
                              </label>
                            </div>
                            <p>*minimum 260px x 260px</p>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput1">
                                Username
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput1"
                                placeholder="alitfn"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleEmail">Email</label>
                              <input
                                type="email"
                                className="form-control"
                                id="formGroupExampleEmail"
                                placeholder="creativelayers@gmail.com"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput3">
                                First Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput3"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput4">
                                Last Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput4"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput5">
                                Position
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput5"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput6">
                                License
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput6"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput7">
                                Tax Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput7"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput8">Phone</label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput8"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput9">
                                Fax Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput9"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput10">
                                Mobile
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput10"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput11">
                                Language
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput11"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput12">
                                Company Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput12"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInput13">
                                Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput13"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="my_profile_setting_textarea">
                              <label htmlFor="exampleFormControlTextarea1">
                                About me
                              </label>
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="7"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-xl-12 text-right">
                            <div className="my_profile_setting_input">
                              <button className="btn btn1">
                                View Public Profile
                              </button>
                              <button className="btn btn2">Update Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my_dashboard_review mt30">
                    <div className="row">
                      <div className="col-xl-2">
                        <h4>Social Media</h4>
                      </div>
                      <div className="col-xl-10">
                        <div className="row">
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleSkype">Skype</label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleSkype"
                                placeholder="alitfn"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleWebsite">
                                Website
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleWebsite"
                                placeholder="creativelayers@gmail.com"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleFaceBook">
                                Facebook
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleFaceBook"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleTwitter">
                                Twitter
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleTwitter"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleLinkedin">
                                Linkedin
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleLinkedin"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleInstagram">
                                Instagram
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInstagram"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleGooglePlus">
                                Google Plus
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleGooglePlus"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleYoutube">
                                Youtube
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleYoutube"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExamplePinterest">
                                Pinterest
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExamplePinterest"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleVimeo">Vimeo</label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleVimeo"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12 text-right">
                            <div className="my_profile_setting_input">
                              <button className="btn btn2">Update Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my_dashboard_review mt30">
                    <div className="row">
                      <div className="col-xl-2">
                        <h4>Change password</h4>
                      </div>
                      <div className="col-xl-10">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleOldPass">
                                Old Password
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleOldPass"
                                placeholder="alitfn"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleNewPass">
                                New Password
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleNewPass"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-xl-6">
                            <div className="my_profile_setting_input form-group">
                              <label htmlFor="formGroupExampleConfPass">
                                Confirm New Password
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleConfPass"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="my_profile_setting_input float-left fn-520">
                              <button className="btn btn3 btn-dark">
                                Update Profile
                              </button>
                            </div>
                            <div className="my_profile_setting_input float-right fn-520">
                              <button className="btn btn2">Update Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt10">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>© 2020 Find House. Made with love.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyProfile;
