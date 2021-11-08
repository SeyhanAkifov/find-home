import Header from "./components/Header";
import Footer from "./components/Footer";
import OurPartners from "./components/OurPartners";
import HomeSearch from "./components/HomeSearch";
import Main from "./components/Main";
import CitySearch from './components/CitySearch';
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="preloader"></div>

        <Header />

        <div
          className="sign_up_modal modal fade bd-example-modal-lg"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times; </span>
                </button>
              </div>
              <div className="modal-body container pb20">
                <div className="row">
                  <div className="col-lg-12">
                    <ul
                      className="sign_up_tab nav nav-tabs"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Register
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-content container" id="myTabContent">
                  <div
                    className="row mt25 tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="col-lg-6 col-xl-6">
                      <div className="login_thumb">
                        <img
                          className="img-fluid w100"
                          src="images/resource/login.jpg"
                          alt="login.jpg"
                        ></img>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-6">
                      <div className="login_form">
                        <form action="#">
                          <div className="heading">
                            <h4>Login</h4>
                          </div>
                          <div className="row mt25">
                            <div className="col-lg-12">
                              <button
                                type="submit"
                                className="btn btn-fb btn-block"
                              >
                                <i className="fa fa-facebook float-left mt5"></i>{" "}
                                Login with Facebook
                              </button>
                            </div>
                            <div className="col-lg-12">
                              <button
                                type="submit"
                                className="btn btn-googl btn-block"
                              >
                                <i className="fa fa-google float-left mt5"></i>{" "}
                                Login with Google
                              </button>
                            </div>
                          </div>

                          <div className="input-group mb-2 mr-sm-2">
                            <input
                              type="text"
                              className="form-control"
                              id="inlineFormInputGroupUsername2"
                              placeholder="User Name Or Email"
                            ></input>
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <i className="flaticon-user"></i>
                              </div>
                            </div>
                          </div>
                          <div className="input-group form-group">
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Password"
                            ></input>
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <i className="flaticon-password"></i>
                              </div>
                            </div>
                          </div>
                          <div className="form-group custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="exampleCheck1"
                            ></input>
                            <label
                              className="custom-control-label"
                              htmlFor="exampleCheck1"
                            >
                              Remember me
                            </label>
                            <a className="btn-fpswd float-right" href="#">
                              Lost your password?
                            </a>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-log btn-block btn-thm"
                          >
                            Log In
                          </button>
                          <p className="text-center">
                            Don't have an account?{" "}
                            <a className="text-thm" href="#">
                              Register
                            </a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row mt25 tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="col-lg-6 col-xl-6">
                      <div className="regstr_thumb">
                        <img
                          className="img-fluid w100"
                          src="images/resource/regstr.jpg"
                          alt="regstr.jpg"
                        ></img>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-6">
                      <div className="sign_up_form">
                        <div className="heading">
                          <h4>Register</h4>
                        </div>
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-12">
                              <button
                                type="submit"
                                className="btn btn-block btn-fb"
                              >
                                <i className="fa fa-facebook float-left mt5"></i>{" "}
                                Login with Facebook
                              </button>
                            </div>
                            <div className="col-lg-12">
                              <button
                                type="submit"
                                className="btn btn-block btn-googl"
                              >
                                <i className="fa fa-google float-left mt5"></i>{" "}
                                Login with Google
                              </button>
                            </div>
                          </div>

                          <div className="form-group input-group">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputName"
                              placeholder="User Name"
                            ></input>
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <i className="flaticon-user"></i>
                              </div>
                            </div>
                          </div>
                          <div className="form-group input-group">
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail2"
                              placeholder="Email"
                            ></input>
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <i className="fa fa-envelope-o"></i>
                              </div>
                            </div>
                          </div>
                          <div className="form-group input-group">
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword2"
                              placeholder="Password"
                            ></input>
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <i className="flaticon-password"></i>
                              </div>
                            </div>
                          </div>
                          <div className="form-group input-group">
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword3"
                              placeholder="Re-enter password"
                            ></input>
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <i className="flaticon-password"></i>
                              </div>
                            </div>
                          </div>
                          <div className="form-group ui_kit_select_search mb0">
                            <select
                              className="selectpicker"
                              data-live-search="true"
                              data-width="100%"
                            >
                              <option data-tokens="SelectRole">
                                Single User
                              </option>
                              <option data-tokens="Agent/Agency">Agent</option>
                              <option data-tokens="SingleUser">
                                Multi User
                              </option>
                            </select>
                          </div>
                          <div className="form-group custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="exampleCheck2"
                            ></input>
                            <label
                              className="custom-control-label"
                              htmlFor="exampleCheck2"
                            >
                              I have read and accept the Terms and Privacy
                              Policy?
                            </label>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-log btn-block btn-thm"
                          >
                            Sign Up
                          </button>
                          <p className="text-center">
                            Already have an account?
                            <a className="text-thm" href="#">
                              Log In
                            </a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="page" className="stylehome1 h0">
          <div className="mobile-menu">
            <div className="header stylehome1">
              <div className="main_logo_home2 text-center">
                <img
                  className="nav_logo_img img-fluid mt20"
                  src="images/header-logo2.png"
                  alt="header-logo2.png"
                ></img>
                <span className="mt20">FindHouse</span>
              </div>
              <ul className="menu_bar_home2">
                <li className="list-inline-item list_s">
                  <a href="page-register.html">
                    <span className="flaticon-user"></span>
                  </a>
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
            <ul>
              <li>
                <span>Home</span>
                <ul>
                  <li>
                    <a href="index.html">Home 1</a>
                  </li>
                  <li>
                    <a href="index2.html">Home 2</a>
                  </li>
                  <li>
                    <a href="index3.html">Home 3</a>
                  </li>
                  <li>
                    <a href="index4.html">Home 4</a>
                  </li>
                  <li>
                    <a href="index5.html">Home 5</a>
                  </li>
                  <li>
                    <a href="index6.html">Home 6</a>
                  </li>
                  <li>
                    <a href="index7.html">Home 7</a>
                  </li>
                  <li>
                    <a href="index8.html">Home 8</a>
                  </li>
                  <li>
                    <a href="index9.html">Home 9</a>
                  </li>
                  <li>
                    <a href="index10.html">Home 10</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Listing</span>
                <ul>
                  <li>
                    <span>Listing Grid</span>
                    <ul>
                      <li>
                        <a href="page-listing-grid-v1.html">Grid v1</a>
                      </li>
                      <li>
                        <a href="page-listing-grid-v2.html">Grid v2</a>
                      </li>
                      <li>
                        <a href="page-listing-grid-v3.html">Grid v3</a>
                      </li>
                      <li>
                        <a href="page-listing-grid-v4.html">Grid v4</a>
                      </li>
                      <li>
                        <a href="page-listing-grid-v5.html">Grid v5</a>
                      </li>
                      <li>
                        <a href="page-listing-full-width-grid.html">
                          Grid Fullwidth
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Listing Style</span>
                    <ul>
                      <li>
                        <a href="page-listing-parallax.html">Parallax Style</a>
                      </li>
                      <li>
                        <a href="page-listing-slider.html">Slider Style</a>
                      </li>
                      <li>
                        <a href="page-listing-map.html">Map Header</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Listing Half</span>
                    <ul>
                      <li>
                        <a href="page-listing-half-map-v1.html">Map V1</a>
                      </li>
                      <li>
                        <a href="page-listing-half-map-v2.html">Map V2</a>
                      </li>
                      <li>
                        <a href="page-listing-half-map-v3.html">Map V3</a>
                      </li>
                      <li>
                        <a href="page-listing-half-map-v4.html">Map V4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Agent View</span>
                    <ul>
                      <li>
                        <a href="page-listing-agent-v1.html">Agent V1</a>
                      </li>
                      <li>
                        <a href="page-listing-agent-v2.html">Agent V2</a>
                      </li>
                      <li>
                        <a href="page-listing-agent-v3.html">Agent Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Agencies View</span>
                    <ul>
                      <li>
                        <a href="page-agencies-list-v1.html">Agencies V1</a>
                      </li>
                      <li>
                        <a href="page-agencies-list-v2.html">Agencies V2</a>
                      </li>
                      <li>
                        <a href="page-agencies-list-v3.html">
                          Agencies Details
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <span>Property</span>
                <ul>
                  <li>
                    <span>Property</span>
                    <ul>
                      <li>
                        <a href="page-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="page-my-properties.html">My Properties</a>
                      </li>
                      <li>
                        <a href="page-add-new-property.html">
                          Add New Property
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Listing Single</span>
                    <ul>
                      <li>
                        <a href="page-listing-single-v1.html">Single V1</a>
                      </li>
                      <li>
                        <a href="page-listing-single-v2.html">Single V2</a>
                      </li>
                      <li>
                        <a href="page-listing-single-v3.html">Single V3</a>
                      </li>
                      <li>
                        <a href="page-listing-single-v4.html">Single V4</a>
                      </li>
                      <li>
                        <a href="page-listing-single-v5.html">Single V5</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <span>Blog</span>
                <ul>
                  <li>
                    <a href="page-blog-v1.html">Blog List 1</a>
                  </li>
                  <li>
                    <a href="page-blog-grid.html">Blog List 2</a>
                  </li>
                  <li>
                    <a href="page-blog-single.html">Single Post</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Pages</span>
                <ul>
                  <li>
                    <span>Shop</span>
                    <ul>
                      <li>
                        <a href="page-shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="page-shop-single.html">Shop Single</a>
                      </li>
                      <li>
                        <a href="page-shop-cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="page-shop-checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="page-shop-order.html">Order</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-about.html">About Us</a>
                  </li>
                  <li>
                    <a href="page-gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="page-faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="page-login.html">LogIn</a>
                  </li>
                  <li>
                    <a href="page-compare.html">Membership</a>
                  </li>
                  <li>
                    <a href="page-compare2.html">Membership 2</a>
                  </li>
                  <li>
                    <a href="page-register.html">Register</a>
                  </li>
                  <li>
                    <a href="page-service.html">Service</a>
                  </li>
                  <li>
                    <a href="page-error.html">404 Page</a>
                  </li>
                  <li>
                    <a href="page-terms.html">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="page-ui-element.html">UI Elements</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="page-contact.html">Contact</a>
              </li>
              <li>
                <a href="page-login.html">
                  <span className="flaticon-user"></span> Login
                </a>
              </li>
              <li>
                <a href="page-register.html">
                  <span className="flaticon-edit"></span> Register
                </a>
              </li>
              <li className="cl_btn">
                <a className="btn btn-block btn-lg btn-thm circle" href="#">
                  <span className="flaticon-plus"></span> Create Listing
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <HomeSearch />

        <Main />

        <CitySearch />

        <WhyChooseUs />
        
        <section id="our-testimonials" className="our-testimonial">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2 className="color-white">Testimonials</h2>
                  <p className="color-white">Here could be a nice sub title</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="testimonial_grid_slider">
                  <div className="item">
                    <div className="testimonial_grid">
                      <div className="thumb">
                        <img src="images/testimonial/1.jpg" alt="1.jpg"></img>
                      </div>
                      <div className="details">
                        <h4>Augusta Silva</h4>
                        <p>Sales Manager</p>
                        <p className="mt25">
                          Aliquam dictum elit vitae mauris facilisis at dictum
                          urna dignissim donec vel lectus vel felis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial_grid">
                      <div className="thumb">
                        <img src="images/testimonial/1.jpg" alt="1.jpg"></img>
                      </div>
                      <div className="details">
                        <h4>Augusta Silva</h4>
                        <p>Sales Manager</p>
                        <p className="mt25">
                          Aliquam dictum elit vitae mauris facilisis at dictum
                          urna dignissim donec vel lectus vel felis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial_grid">
                      <div className="thumb">
                        <img src="images/testimonial/1.jpg" alt="1.jpg"></img>
                      </div>
                      <div className="details">
                        <h4>Augusta Silva</h4>
                        <p>Sales Manager</p>
                        <p className="mt25">
                          Aliquam dictum elit vitae mauris facilisis at dictum
                          urna dignissim donec vel lectus vel felis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial_grid">
                      <div className="thumb">
                        <img src="images/testimonial/1.jpg" alt="1.jpg"></img>
                      </div>
                      <div className="details">
                        <h4>Augusta Silva</h4>
                        <p>Sales Manager</p>
                        <p className="mt25">
                          Aliquam dictum elit vitae mauris facilisis at dictum
                          urna dignissim donec vel lectus vel felis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial_grid">
                      <div className="thumb">
                        <img src="images/testimonial/1.jpg" alt="1.jpg"></img>
                      </div>
                      <div className="details">
                        <h4>Augusta Silva</h4>
                        <p>Sales Manager</p>
                        <p className="mt25">
                          Aliquam dictum elit vitae mauris facilisis at dictum
                          urna dignissim donec vel lectus vel felis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-blog bgc-f7 pb30">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>Articles & Tips</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 col-xl-4">
                <div className="for_blog feat_property">
                  <div className="thumb">
                    <img
                      className="img-whp"
                      src="images/blog/bh1.jpg"
                      alt="bh1.jpg"
                    ></img>
                  </div>
                  <div className="details">
                    <div className="tc_content">
                      <p className="text-thm">Business</p>
                      <h4>
                        Skills That You Can Learn In The Real Estate Market
                      </h4>
                    </div>
                    <div className="fp_footer">
                      <ul className="fp_meta float-left mb0">
                        <li className="list-inline-item">
                          <a href="#">
                            <img
                              src="images/property/pposter1.png"
                              alt="pposter1.png"
                            ></img>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">Ali Tufan</a>
                        </li>
                      </ul>
                      <a className="fp_pdate float-right" href="#">
                        7 August 2019
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-4">
                <div className="for_blog feat_property">
                  <div className="thumb">
                    <img
                      className="img-whp"
                      src="images/blog/bh2.jpg"
                      alt="bh2.jpg"
                    ></img>
                  </div>
                  <div className="details">
                    <div className="tc_content">
                      <p className="text-thm">Business</p>
                      <h4>
                        Bedroom Colors You’ll Never{" "}
                        <br className="dn-1199"></br> Regret
                      </h4>
                    </div>
                    <div className="fp_footer">
                      <ul className="fp_meta float-left mb0">
                        <li className="list-inline-item">
                          <a href="#">
                            <img
                              src="images/property/pposter1.png"
                              alt="pposter1.png"
                            ></img>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">Ali Tufan</a>
                        </li>
                      </ul>
                      <a className="fp_pdate float-right" href="#">
                        7 August 2019
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-4">
                <div className="for_blog feat_property">
                  <div className="thumb">
                    <img
                      className="img-whp"
                      src="images/blog/bh3.jpg"
                      alt="bh3.jpg"
                    ></img>
                  </div>
                  <div className="details">
                    <div className="tc_content">
                      <p className="text-thm">Business</p>
                      <h4>5 Essential Steps htmlFor Buying an Investment</h4>
                    </div>
                    <div className="fp_footer">
                      <ul className="fp_meta float-left mb0">
                        <li className="list-inline-item">
                          <a href="#">
                            <img
                              src="images/property/pposter1.png"
                              alt="pposter1.png"
                            ></img>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">Ali Tufan</a>
                        </li>
                      </ul>
                      <a className="fp_pdate float-right" href="#">
                        7 August 2019
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OurPartners />

        <Footer />

        <a className="scrollToHome" href="#">
          <i className="flaticon-arrows"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
