import useFetch from "../hooks/useFetch";

import MainItem from "./MainItem";
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect , useRef} from "react";
import AuthContext from "../contexts/AuthContext";
import "../Styles/Main.css"

//http://apifindhome.seyhanakifov.com/api/Home/Get
function MyProperties() {
  let navigate = useNavigate();
  const token = useContext(AuthContext);
  
  const divRef = useRef(null);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView(
        {
          behavior: 'smooth',
        })
    }
  });

  useEffect( () => {
    if(!token.token){
      navigate({ pathname : '/login'})
    }
  }, [token, navigate])

  const url = `https://apifindhome.seyhanakifov.com/api/Property/GetMy?user=${token.email}`;
  const [items, error, isLoaded] = useFetch(url, token.token);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <section id="feature-property" className="feature-property bgc-f7" ref={divRef}>
          
          <div className="container ovh">
            {items.length > 0 ? 
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center mb40">
                  <h2>My Properties</h2>
                  <p>Handpicked properties from me</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="feature_property_slider">
                  {items.map((item) => (
                    <MainItem key={item.id} data={item}></MainItem>
                  ))}
                </div>
              </div>
            </div> : <h1>No Items Yet</h1> }
          </div>
        </section>
      </>
    );
  }
}

export default MyProperties;