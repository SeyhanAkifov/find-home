import { Link } from "react-router-dom";

function Footer () {
    return (
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
                  <p>© Seyhan Akifov  2021 Find Home.Made with love.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        )
}

export default Footer;