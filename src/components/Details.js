import { useState, useEffect, useRef, } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../Styles/Details.css";

function Details() {
  let navigate = useNavigate();

  const { user } = useAuth();
  const { token, email } = user;

  
  
  const [isLiked, setIsLiked] = useState(false);
 
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
      `https://localhost:44382/api/Home/GetWithId?id=${id.id}`,
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
          data.likes.includes(email) ? setIsLiked(true) : setIsLiked(false);
          // data.likes.includes(email) ? isLiked = true : false;
          setProperty(data);
          setIsLoaded(true);

          if (data.status === "Not Found") {
            navigate("/notFound", { search: data });
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .catch((error) => {
        navigate("/notFound", { message: "Item not found in database" });
      });
  }, [id.id, token, isLiked, navigate, email]);

  const SendMessage = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let message = formData.get("message");
    let email = formData.get("email");
    let name = formData.get("name");

    await fetch(
      `https://localhost:44382/api/Property/SendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          senderName: name,
          senderEmail: email,
          recipientEmail: property.creator,
          propertyId: id.id,
          description: message,
        }),
      }
    ).then((res) => res.json());

    let sendInfo = document.getElementById("sendMessage");
    sendInfo.style.color="green";
    sendInfo.style.display = "block"
  };

  const OnDelete = async (e) => {
    e.preventDefault();

    await fetch(
      `https://localhost:44382/api/Home/DeleteWithId?id=${id.id}`,
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

    if (email === property.creator) {
      navigate({
        pathname: "/notFound",
      });
    }

    if (property.likes.includes(email)) {
      navigate({
        pathname: "/notFound",
      });
    }
    console.log(email);
    await fetch(`https://localhost:44382/api/Home/UserLike`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: email,
        propertyId: id.id,
      }),
    }).then((res) => res.json());

    setIsLiked(true);
    navigate({ pathname: `/details/${id.id}` });
  };

  const OnUnlike = async (e) => {
    e.preventDefault();

    if (email === property.creator) {
      navigate({
        pathname: "/notFound",
      });
    }

    if (!property.likes.includes(email)) {
      navigate({
        pathname: "/notFound",
      });
    }

    console.log(email);
    await fetch(`https://localhost:44382/api/Home/UserUnlike`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: email,
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
                          {(parseInt((new Date(Date.now()) -
                            new Date(property.addedOn))/(1000* 60 *60 *24),10)) < 27 ? '' + (parseInt((new Date(Date.now()) -
                            new Date(property.addedOn))/(1000* 60 *60 *24),10)) + ' days' : (parseInt((new Date(Date.now()) -
                            new Date(property.addedOn))/(1000* 60 *60 *24),10)) > 360 ? "" + Math.round((parseInt((new Date(Date.now()) -
                            new Date(property.addedOn))/(1000* 60 *60 *24),10)) / 360) + ' years' : '' + Math.round((parseInt((new Date(Date.now()) -
                            new Date(property.addedOn))/(1000* 60 *60 *24),10)) / 30) + ' months'}{" "}
                             </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="my_profile_setting_input">
                      {token ? (
                        email === property.creator ? (
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
                            {property.likes.includes(email) ? (
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
              {property.creator !== email ? 
              <div className="col-lg-4 col-xl-4">
              <div className="sidebar_listing_grid1">
                <div className="sidebar_listing_list">
                  <form
                    className="sidebar_advanced_search_widget"
                    onSubmit={SendMessage}
                  >
                    <h4 className="mb25">Contact {property.creator}</h4>
                    <ul className="sasw_list mb0">
                      <li className="search_area">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                          />
                        </div>
                      </li>

                      <li className="search_area">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            defaultValue={email}
                          />
                        </div>
                      </li>
                      <li className="search_area">
                        <div className="form-group">
                          <textarea
                            id="message"
                            name="message"
                            className="form-control required"
                            rows="5"
                            required="required"
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                      </li>
                      <li>
                        <div className="search_option_button">
                          <button type="submit" className="btn btn-block btn-thm">
                            Send
                          </button>
                        </div>
                        <span id="sendMessage" >Message sent!</span>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div> : ""
              }
              
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Details;
