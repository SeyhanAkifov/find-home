import { useState , useEffect} from 'react'

import {Route, Link, Switch} from 'react-router-dom'

function Header({
  navChange}) {

  

  const onHeaderClick = (e) => {
     e.preventDefault()

     if (e.target.tagName == 'A') {
       let url = new URL(e.target.href)
      navChange(url.pathname)
     }
     
  };
  
    return (
        <header className="header-nav menu_style_home_one navbar-scrolltofixed stricky main-menu" >
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
              <ul id="respMenu" className="ace-responsive-menu text-right" data-menu-style="horizontal">
                <li>
                  <a to="#">
                    <span className="title">Home</span>
                  </a>

                  <ul>
                    <li>
                    <Link to="/home"><a to="index.html">Home 1</a>
                 </Link>
                      
                    </li>
                    <li>
                      <a to="index2.html">Home 2</a>
                    </li>
                    <li>
                      <a to="index3.html">Home 3</a>
                    </li>
                    <li>
                      <a to="index4.html">Home 4</a>
                    </li>
                    <li>
                      <a to="index5.html">Home 5</a>
                    </li>
                    <li>
                      <a to="index6.html">Home 6</a>
                    </li>
                    <li>
                      <a to="index7.html">Home 7</a>
                    </li>
                    <li>
                      <a to="index8.html">Home 8</a>
                    </li>
                    <li>
                      <a to="index9.html">Home 9</a>
                    </li>
                    <li>
                      <a to="index10.html">Home 10</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a to="#">
                    <span className="title">Listing</span>
                  </a>

                  <ul>
                    <li>
                      <a to="#">Listing Grid</a>

                      <ul>
                        <li>
                          <a to="page-listing-grid-v1.html">Grid v1</a>
                        </li>
                        <li>
                          <a to="page-listing-grid-v2.html">Grid v2</a>
                        </li>
                        <li>
                          <a to="page-listing-grid-v3.html">Grid v3</a>
                        </li>
                        <li>
                          <a to="page-listing-grid-v4.html">Grid v4</a>
                        </li>
                        <li>
                          <a to="page-listing-grid-v5.html">Grid v5</a>
                        </li>
                        <li>
                          <a to="page-listing-full-width-grid.html">
                            Grid Fullwidth
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a to="#">Listing List</a>

                      <ul>
                        <li>
                          <a to="page-listing-list.html">List V1</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a to="#">Listing Style</a>

                      <ul>
                        <li>
                          <a to="page-listing-parallax.html">
                            Parallax Style
                          </a>
                        </li>
                        <li>
                          <a to="page-listing-slider.html">Slider Style</a>
                        </li>
                        <li>
                          <a to="page-listing-map.html">Map Header</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a to="#">Listing Half</a>

                      <ul>
                        <li>
                          <a to="page-listing-half-map-v1.html">Map V1</a>
                        </li>
                        <li>
                          <a to="page-listing-half-map-v2.html">Map V2</a>
                        </li>
                        <li>
                          <a to="page-listing-half-map-v3.html">Map V3</a>
                        </li>
                        <li>
                          <a to="page-listing-half-map-v4.html">Map V4</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a to="#">Agent View</a>

                      <ul>
                        <li>
                          <a to="page-listing-agent-v1.html">Agent V1</a>
                        </li>
                        <li>
                          <a to="page-listing-agent-v2.html">Agent V2</a>
                        </li>
                        <li>
                          <a to="page-listing-agent-v3.html">Agent Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a to="#">Agencies View</a>

                      <ul>
                        <li>
                          <a to="page-listing-agencies-v1.html">
                            Agencies V1
                          </a>
                        </li>
                        <li>
                          <a to="page-listing-agencies-v2.html">
                            Agencies V2
                          </a>
                        </li>
                        <li>
                          <a to="page-listing-agencies-v3.html">
                            Agencies Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a to="page-add-new-property.html" >Create Listing</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a to="#">
                    <span className="title">Property</span>
                  </a>
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
                      <a to="#">Listing Single</a>

                      <ul>
                        <li>
                          <a to="page-listing-single-v1.html">Single V1</a>
                        </li>
                        <li>
                          <a to="page-listing-single-v2.html">Single V2</a>
                        </li>
                        <li>
                          <a to="page-listing-single-v3.html">Single V3</a>
                        </li>
                        <li>
                          <a to="page-listing-single-v4.html">Single V4</a>
                        </li>
                        <li>
                          <a to="page-listing-single-v5.html">Single V5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a to="page-add-new-property.html">Create Listing</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a to="#">
                    <span className="title">Pages</span>
                  </a>
                  <ul>
                    <li>
                      <a to="#">
                        <span className="title">Pages</span>
                      </a>
                      <ul>
                        <li>
                          <a to="page-shop.html">Shop</a>
                        </li>
                        <li>
                          <a to="page-shop-single.html">Shop Single</a>
                        </li>
                        <li>
                          <a to="page-shop-cart.html">Cart</a>
                        </li>
                        <li>
                          <a to="page-shop-checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a to="page-shop-order.html">Order</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a to="page-about.html">About Us</a>
                    </li>
                    <li>
                      <a to="page-gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a to="page-faq.html">Faq</a>
                    </li>
                    <li>
                      <a to="page-login.html">LogIn</a>
                    </li>
                    <li>
                      <a to="page-compare.html">Membership</a>
                    </li>
                    <li>
                      <a to="page-compare2.html">Membership 2</a>
                    </li>
                    <li>
                      <a to="page-register.html">Register</a>
                    </li>
                    <li>
                      <a to="page-service.html">Service</a>
                    </li>
                    <li>
                      <a to="page-error.html">404 Page</a>
                    </li>
                    <li>
                      <a to="page-terms.html">Terms and Conditions</a>
                    </li>
                    <li>
                      <a to="page-ui-element.html">UI Elements</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a to="#">
                    <span className="title">Blog</span>
                  </a>
                  <ul>
                    <li>
                      <a to="page-blog-v1.html">Blog List 1</a>
                    </li>
                    <li>
                      <a to="page-blog-grid.html">Blog List 2</a>
                    </li>
                    <li>
                      <a to="page-blog-single.html">Single Post</a>
                    </li>
                  </ul>
                </li>
                <li className="last">
                  <a to="page-contact.html">
                    <span className="title">Contact</span>
                  </a>
                </li>
                <li className="list-inline-item list_s">
                  <a
                    to="#"
                    className="btn flaticon-user"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                  >
                    {" "}
                    <span className="dn-lg">Login/Register</span>
                  </a>
                </li>
                <li className="list-inline-item add_listing" >
                 <Link to="/create">Create Listing
                 </Link>
                  
                   
                  
                </li>
               
              </ul>
              
            </nav>
          </div>
        </header>
    )
    
}

export default Header;



