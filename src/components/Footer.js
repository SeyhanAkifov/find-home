import { Link } from "react-router-dom";

function Footer () {
    return (
		<div>
        <section className="footer_one">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
                <div className="footer_about_widget">
                  <h4>About Site</h4>
                  <p>
                    We’re reimagining how you buy, sell and rent.It’s now easier
                    to get into Link place you love.So let’s do this, together.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="footer_qlink_widget">
                  <h4>Quick Links</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="#">User’s Guide</Link>
                    </li>
                    <li>
                      <Link to="#">Support Center</Link>
                    </li>
                    <li>
                      <Link to="#">Press Info</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="footer_contact_widget">
                  <h4>Contact Us</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">info @findhouse.com</Link>
                    </li>
                    <li>
                      <Link to="#">Collins Street West, Victoria</Link>
                    </li>
                    <li>
                      <Link to="#">8007, Australia.</Link>
                    </li>
                    <li>
                      <Link to="#">+1 246-345-0699</Link>
                    </li>
                    <li>
                      <Link to="#">+1 246-345-0695</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="footer_social_widget">
                  <h4>Follow us</h4>
                  <ul className="mb30">
                    <li className="list-inline-item">
                      <Link to="#">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">
                        <i className="fa fa-instagram"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">
                        <i className="fa fa-pinterest"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">
                        <i className="fa fa-dribbble"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">
                        <i className="fa fa-google"></i>
                      </Link>
                    </li>
                  </ul>
                  <h4>Subscribe</h4>
                  <form className="footer_mailchimp_form">
                    <div className="form-row align-items-center">
                      <div className="col-auto">
                        <input
                          type="email"
                          className="form-control mb-2"
                          id="inlineFormInput"
                          placeholder="Your email"
                        ></input>
                      </div>
                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-2">
                          <i className="fa fa-angle-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer_middle_area pt40 pb40">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-6">
                <div className="footer_menu_widget">
                  <ul>
                    <li className="list-inline-item">
                      <Link to="#">Home</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">Listing</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">Property</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">Pages</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">Blog</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6">
                <div className="copyright-widget text-right">
                  <p>© 2020 Find House.Made with love.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
		</div>
    )
}

export default Footer;