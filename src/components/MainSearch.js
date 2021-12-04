import { useState, useEffect,  } from "react";
import { useParams} from 'react-router-dom'
import MainItem from "./MainItem";



function MainSearch({token}) {
  let query = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch(`http://apifindhome.seyhanakifov.com/api/Property/Search?${query.query}`, {
      headers : {
        Authorization: `Bearer ${token}`
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
  }, [token, query.query]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <section id="feature-property" className="feature-property bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <a href="#feature-property">
                <div className="mouse_scroll">
                  <div className="icon">
                    <h4>Scroll Down</h4>
                    <p>to discover more</p>
                  </div>
                  <div className="thumb">
                    <img src="images/resource/mouse.png" alt="mouse.png"></img>
                  </div>
                </div>
              </a>
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
    );
  }
}

export default MainSearch;
