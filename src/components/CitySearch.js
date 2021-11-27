import { useState, useEffect, useContext } from "react";
import AuthContext from '../contexts/AuthContext'

function CitySearch () {
  const token = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  console.log(token);
  useEffect(() => {
    fetch("https://localhost:44382/api/Home/GetCitiesWitProperties", {
      
        headers : {
        Authorization: `Bearer ${token}`
       },
      
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
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
        <section id="property-city" className="property-city pb30">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>Find Properties in These Cities</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              
            {items.map((item) => (
                     
                    <div className={`col-lg-${item.size} col-xl-${item.size}`}>
                  <div className="properti_city">
                    <div className="thumb">
                      <img
                        className="img-fluid w100"
                        src={`images/${item.city.toLowerCase()}.jpg`}
                        alt="pc1.jpg"
                      ></img>
                    </div>
                    <div className="overlay">
                      <div className="details">
                        <h4>{item.city}</h4>
                        <p>Properties: {item.properties}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              ))}
              
            </div>
          </div>
        </section>
    )}
}

export default CitySearch