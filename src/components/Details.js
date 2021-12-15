import { useState, useEffect, useRef, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import "../Styles/Details.css";

function Details() {
  let navigate = useNavigate();

  const userInfo = useContext(AuthContext);
  const [isLiked, setIsLiked] = useState(false);
  let token = userInfo.token;
  let username = userInfo.email;
  let id = useParams();

  const [property, setProperty] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let feature = null;

  const divRef = useRef(null);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  });

  useEffect(() => {
    fetch(
      `https://apifindhome.seyhanakifov.com/api/Home/GetWithId?id=${id.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data.likes);
          data.likes.includes(username) ? setIsLiked(true) : setIsLiked(false)
          // data.likes.includes(username) ? isLiked = true : false;
          setProperty(data);
          setIsLoaded(true);
          console.log(data);
          if (data.status === "Not Found") {
            navigate("/notFound", { search: data });
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        }
      )
      .catch((error) => {
        console.log("error");
        console.log(error);
        navigate("/notFound", { message: "Item not found in database" });
      });
  }, [id.id, token, isLiked, navigate]);

  const OnDelete = async (e) => {
    e.preventDefault();

    await fetch(
      `https://apifindhome.seyhanakifov.com/api/Home/DeleteWithId?id=${id.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Not Found") {
          navigate("/notFound", { search: data });
        }
      });

    navigate({ pathname: "/home" });
  };

  const OnLike = async (e) => {
    e.preventDefault();

    await fetch(`https://apifindhome.seyhanakifov.com/api/Home/UserLike`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: username,
        propertyId: id.id,
      }),
    }).then((res) => res.json());

    setIsLiked(true);
    navigate({ pathname: `/details/${id.id}` });
  };

  const OnUnlike = async (e) => {
    e.preventDefault();

    await fetch(`https://apifindhome.seyhanakifov.com/api/Home/UserUnlike`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: username,
        propertyId: id.id,
      }),
    }).then((res) => res.json());

    setIsLiked(false);
    navigate({ pathname: `/details/${id.id}` });
  };

  feature = property.feature;


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <section className="our-agent-single pb30-991" ref={divRef}>
          <div className="container">
            <div className="row" id="myDetails">
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="listing_single_description">
                      <img
                        className="img-whp"
                        src={property.imageUrl}
                        alt="house.jpg"
                      ></img>
                    </div>
                  </div>
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
                      <p className="mb25">{property.description}</p>
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
                                <span>
                                  $
                                  {property.adFor === "Buy"
                                    ? property.price
                                    : property.price + " / month"}
                                </span>
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
                            {feature
                              ? Object.entries(feature)
                                  .slice(1, 6)
                                  .map(([key, value]) => (
                                    <li key={key}>
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
                                  ))
                              : ""}
                          </ul>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                          <ul className="order_list list-inline-item">
                            {feature
                              ? Object.entries(feature)
                                  .slice(6, 11)
                                  .map(([key, value]) => (
                                    <li key={key}>
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
                                  ))
                              : ""}
                          </ul>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                          <ul className="order_list list-inline-item">
                            {feature
                              ? Object.entries(feature)
                                  .slice(11, 16)
                                  .map(([key, value]) => (
                                    <li key={key}>
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
                                  ))
                              : ""}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="application_statics mt30">
                      <div className="row">
                        <div className="col-lg-12">
                          <h4 className="mb10">Added by</h4>
                        </div>
                        <h5>Email : {property.creator}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="application_statics mt30">
                      <div className="row">
                        <div className="col-lg-12">
                          <h4 className="mb10">Added before</h4>
                        </div>
                        <h5>
                          {new Date(Date.now()).getDay() -
                            new Date(property.addedOn).getDay()}{" "}
                          days
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="my_profile_setting_input">
                      {token ? (
                        username === property.creator ? (
                          <>
                            <Link to={`/edit/${id.id}`}>
                              <button className="btn btn1 float-left">
                                Edit
                              </button>
                            </Link>
                            <button
                              onClick={OnDelete}
                              className="btn btn2 float-right"
                            >
                              Delete
                            </button>
                          </>
                        ) : (
                          <>
                            {property.likes.includes(username) ? (
                              <button
                                onClick={OnUnlike}
                                className="btn btn2 float-right"
                              >
                                Unlike
                              </button>
                            ) : (
                              <button
                                onClick={OnLike}
                                className="btn btn2 float-right"
                              >
                                Like
                              </button>
                            )}{" "}
                          </>
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Details;
