import { useContext } from "react";
import AuthContext from '../contexts/AuthContext'
import useFetch from '../hooks/useFetch'
import CityItem from './CityItem'

function CitySearch () {
  const token = useContext(AuthContext);
 
  console.log(token);
  
    const url = "https://localhost:44382/api/Home/GetCitiesWitProperties";
      
      const [items, error, isLoaded] = useFetch(url, token)
  //     if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else 

  console.log(items);
  if (!isLoaded) {
    return <div>Loading...</div>;
  }else if (error) {
    return <div>Error: {error.message}</div>;
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
                     
                     <CityItem key={item.id} data={item}></CityItem>
                
              ))}
              
            </div>
          </div>
        </section>
    )}
}

export default CitySearch