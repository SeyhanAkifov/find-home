import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import MainItem from "./MainItem";

import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

//http://apifindhome.seyhanakifov.com/api/Home/Get
function Main() {
  const token = useContext(AuthContext);
  console.log(token);
  const url = "https://localhost:44382/api/Home/Get";
  const [items, error, isLoaded] = useFetch(url, token);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <section id="feature-property" className="feature-property bgc-f7">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Link to="#feature-property">
                  <div className="mouse_scroll">
                    <div className="icon">
                      <h4>Scroll Down</h4>
                      <p>to discover more</p>
                    </div>
                    <div className="thumb">
                      <img
                        src="images/resource/mouse.png"
                        alt="mouse.png"
                      ></img>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="container ovh">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center mb40">
                  <h2>Featured Properties</h2>
                  <p>Handpicked properties by our team.</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="feature_property_slider">
                  {items.map((item) => (
                    <MainItem key={item.id} data={item}></MainItem>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Main;
