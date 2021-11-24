import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainItem from "./MainItem";
import HomeSearch from "../components/HomeSearch";

//http://apifindhome.seyhanakifov.com/api/Home/Get
function Main() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://localhost:44382/api/Home/Get", {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2V5aGFuIiwianRpIjoiYWM5Zjc0OTctMTA2NS00ZjgxLWJlNWMtOTE3NGY3ZWQ3MTAzIiwiZXhwIjoxNjM2ODk3ODgyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjU5OTIxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.bL9Bc7Olqxld1lEuu2mS-zXlEb4UUmOogXxLy5QYLiU",
        expiration: "2021-11-14T13:51:22Z",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of Link catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  console.log(items);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      <HomeSearch />
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
                    <img src="images/resource/mouse.png" alt="mouse.png"></img>
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
