import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../contexts/AuthContext";

function Details() {
  let navigate = useNavigate();
  
  const userInfo = useContext(AuthContext);
  
  let token = userInfo.token;
  let username = userInfo.email
  let id = useParams();
  
  const [property, setProperty] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let feature;
  
  useEffect(() => {

    
    fetch(`https://localhost:44382/api/Home/GetWithId?id=${id.id}`, {
      
      headers: {
        
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(
        (data) => {
          setProperty(data);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id.id, token]);

  const OnDelete = async (e) => {
    e.preventDefault();
    
    await fetch(`http://apifindhome.seyhanakifov.com/api/Home/DeleteWithId?id=${id.id}`, {
      method: 'DELETE',
      headers: {
       
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      

    navigate({ pathname: "/home" });
  };

  const OnLike = async (e) => {
    e.preventDefault();
    
    await fetch(`https://localhost:44382/api/Home/UserLike`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body : JSON.stringify({
        username : username,
        propertyId : id.id
      })
    })
      .then((res) => res.json())
      

    navigate({ pathname: "/home" });
  };

  const OnUnlike = async (e) => {
    e.preventDefault();
    
    await fetch(`https://localhost:44382/api/Home/UserUnlike`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body : JSON.stringify({
        username : username,
        propertyId : id.id
      })
    })
      .then((res) => res.json())
      

    navigate({ pathname: "/home" });
  };

 
  feature = property.feature;
  console.log(property);
  console.log(feature);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <section className="our-agent-single pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  <div className="listing_single_description">
                  <h1>{property.title}</h1>
                    <div className="lsd_list">
                      <ul className="mb0">
                        <li className="list-inline-item">
                          <Link to="#">{property.type}</Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="#">Beds: {property.beds}</Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="#">Baths: {property.baths}</Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="#">Sq Ft: {property.area}</Link>
                        </li>
                      </ul>
                    </div>
                    <h4 className="mb30">Description</h4>
                    <p className="mb25">
                    Fully furnished. Elegantly appointed condominium unit
                      situated on premier location. PS6. The wide entry hall
                      leads to Link large living room with dining area. This
                      expansive 2 bedroom and 2 renovated marble bathroom
                      apartment has great windows. Despite the interior views,
                      {property.description}
                      
                    </p>
                    <p className="gpara second_para white_goverlay mt10 mb10">
                      Fully furnished. Elegantly appointed condominium unit
                      situated on premier location. PS6. The wide entry hall
                      leads to Link large living room with dining area. This
                      expansive 2 bedroom and 2 renovated marble bathroom
                      apartment has great windows. Despite the interior views,
                      the apartments Southern and Eastern exposures allow
                      htmlFor lovely natural light to fill every room. The
                      master suite is surrounded by handcrafted milkwork and
                      features incredible walk-in closet and storage space.
                    </p>
                    <div className="collapse" id="collapseExample">
                      <div className="card card-body">
                        <p className="mt10 mb10">
                          Fully furnished. Elegantly appointed condominium unit
                          situated on premier location. PS6. The wide entry hall
                          leads to Link large living room with dining area. This
                          expansive 2 bedroom and 2 renovated marble bathroom
                          apartment has great windows. Despite the interior
                          views, the apartments Southern and Eastern exposures
                          allow htmlFor lovely natural light to fill every room.
                          The master suite is surrounded by handcrafted milkwork
                          and features incredible walk-in closet and storage
                          space.
                        </p>
                        <p className="mt10 mb10">
                          Fully furnished. Elegantly appointed condominium unit
                          situated on premier location. PS6. The wide entry hall
                          leads to Link large living room with dining area. This
                          expansive 2 bedroom and 2 renovated marble bathroom
                          apartment has great windows. Despite the interior
                          views, the apartments Southern and Eastern exposures
                          allow htmlFor lovely natural light to fill every room.
                          The master suite is surrounded by handcrafted milkwork
                          and features incredible walk-in closet and storage
                          space.
                        </p>
                      </div>
                    </div>
                    <p className="overlay_close">
                      <Link
                        className="text-thm fz14"
                        data-toggle="collapse"
                        to="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Show More{" "}
                        <span className="flaticon-download-1 fz12"></span>
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="additional_details">
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="mb15">Property Details</h4>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <ul className="list-inline-item">
                          <li>
                            <p>Property ID :</p>
                          </li>
                          <li>
                            <p>Price : </p>
                          </li>
                          <li>
                            <p>Property Size : </p>
                          </li>
                          <li>
                            <p>Year Built : </p>
                          </li>
                          
                        </ul>
                        <ul className="list-inline-item">
                          <li>
                            <p>
                              <span>{property.id}</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>${property.price}</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>{property.area} Sq Ft</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>{property.yearOfConstruction}</span>
                            </p>
                          </li>
                          
                        </ul>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <ul className="list-inline-item">
                          <li>
                            <p>Bedrooms : </p>
                          </li>
                          <li>
                            <p>Bathrooms : </p>
                          </li>
                          <li>
                            <p>Garage :</p>
                          </li>
                          <li>
                            <p>Garden :</p>
                          </li>
                        </ul>
                        <ul className="list-inline-item">
                          <li>
                            <p>
                              <span>{property.beds}</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>{property.baths}</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>2</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>{property.garden ? "Yes" : "No"}</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <ul className="list-inline-item">
                          <li>
                            <p>Property Type :</p>
                          </li>
                          <li>
                            <p>Property Status :</p>
                          </li>
                          <li>
                            <p>Building Status : </p>
                          </li>
                          <li>
                            <p>Garden : </p>
                          </li>
                        </ul>
                        <ul className="list-inline-item">
                          <li>
                            <p>
                              <span>{property.type}</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>For {property.adFor}</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>{property.condition}</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <span>{property.garden ? "Yes" : "No"}</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="application_statics mt30">
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="mb10">Features</h4>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4">
                        <ul className="order_list list-inline-item">
                          {Object.entries(feature).slice(0, 5).map(([key, value]) => (
                            <li>
                              <Link to="#">
                                <span
                                  className={
                                    value === true
                                      ? "flaticon-tick"
                                      : "flaticon-close"
                                  }
                                ></span>
                                {key} 
                              </Link>
                            </li>
                          ))}
                          </ul>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4">
                        <ul className="order_list list-inline-item">
                        {Object.entries(feature).slice(5, 10).map(([key, value]) => (
                            <li>
                              <Link to="#">
                                <span
                                  className={
                                    value === true
                                      ? "flaticon-tick"
                                      : "flaticon-close"
                                  }
                                ></span>
                                {key} 
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4">
                        <ul className="order_list list-inline-item">
                        {Object.entries(feature).slice(10, 15).map(([key, value]) => (
                            <li>
                              <Link to="#">
                                <span
                                  className={
                                    value === true
                                      ? "flaticon-tick"
                                      : "flaticon-close"
                                  }
                                ></span>
                                {key} 
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
              <div className="my_profile_setting_input">
                {token ? 
                username  === property.creator ? 
                <>
                  <Link to={`/edit/${id.id}`}>
                <button className="btn btn1 float-left">Edit</button>
                </Link>
                <button  onClick={OnDelete} className="btn btn2 float-right">Delete</button>
                </> : 
                <>
                {property.likes.includes(username) ?
                <button onClick={OnUnlike} className="btn btn2 float-right">Unlike</button> :
                <button onClick={OnLike} className="btn btn2 float-right">Like</button> } </>  :
                 ""}
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Details;
