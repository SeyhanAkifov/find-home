import { useState, useEffect } from "react";

function CitySearch () {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const v = 4;
  useEffect(() => {
    fetch("https://localhost:5001/api/Home/GetCitiesWitProperties", {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2V5aGFuIiwianRpIjoiYWM5Zjc0OTctMTA2NS00ZjgxLWJlNWMtOTE3NGY3ZWQ3MTAzIiwiZXhwIjoxNjM2ODk3ODgyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjU5OTIxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.bL9Bc7Olqxld1lEuu2mS-zXlEb4UUmOogXxLy5QYLiU",
        expiration: "2021-11-14T13:51:22Z",
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