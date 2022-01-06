import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function EditProperty() {
  let navigate = useNavigate();
  let counter = 1;
  const { token, email } = useContext(AuthContext);
  let [userError, setUserError] = useState();
  let inputs = [
    "title",
    "image",
    "description",
    "type",
    "status",
    "price",
    "area",
    "rooms",
    "baths",
    "floor",
    "adFor",
    "year",
    "address",
    "city",
    "country",
    "zip",
  ];

  const divRef = useRef(null);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  });

  useEffect(() => {
    if (!token) {
      navigate({ pathname: "/login" });
    }
  }, [token, navigate]);

  

  let id = useParams();
  const [property, setProperty] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let feature;

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
          setProperty(data);
          setIsLoaded(true);
          feature = data.feature;
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .catch((error) => {
        navigate("/notFound", { search: error });
      });
  }, [id.id, token]);

  feature = property.feature;


  if(email !== property.creator){
    navigate({
      pathname: '/notFound'
    })
  }
  const onFormSubmit = async (e) => {
    e.preventDefault();

    
    let formData = new FormData(e.currentTarget);

    let err = false;

    inputs.forEach((element) => {
      if (!formData.get(`${element}`)) {
        document.querySelector(`#${element}`).style.background = "pink";
        document.querySelector(`.${element}-error`).style.color = "red";
        document.querySelector(
          `.${element}-error`
        ).innerHTML = `${element} is required`;
        setTimeout(() => {
          document.querySelector(`#${element}`).style.background = "white";
        }, 1000);
        err = true;
      }
    });
    if (!err) {
      let title = formData.get("title");
      let description = formData.get("description");
      let type = formData.get("type");
      let status = formData.get("status");
      let price = formData.get("price");
      let area = formData.get("area");
      let rooms = formData.get("rooms");
      let baths = formData.get("baths");
      let floor = formData.get("floor");
      let adFor = formData.get("adFor");
      let year = formData.get("year");
      let address = formData.get("address");
      let city = formData.get("city");
      let country = formData.get("country");
      let zip = formData.get("zip");
      let image = formData.get("image");

      let airConditioning = formData.get("airConditioning") ? true : false;
      let lawn = formData.get("lawn") ? true : false;
      let swimmingPool = formData.get("swimmingPool") ? true : false;
      let barbeque = formData.get("barbeque") ? true : false;
      let kitchen = formData.get("kitchen") ? true : false;
      let tvCable = formData.get("tvCable") ? true : false;
      let dryer = formData.get("dryer") ? true : false;
      let outdoorShower = formData.get("outdoorShower") ? true : false;
      let washer = formData.get("washer") ? true : false;
      let gym = formData.get("gym") ? true : false;
      let refrigerator = formData.get("refrigerator") ? true : false;
      let wifi = formData.get("wifi") ? true : false;
      let laundry = formData.get("laundry") ? true : false;
      let sauna = formData.get("sauna") ? true : false;
      let windowCoverings = formData.get("windowCoverings") ? true : false;
      let garden = formData.get("garden") ? true : false;

      fetch("https://apifindhome.seyhanakifov.com/api/Home/Edit", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          id: id.id,
          creator: email,
          typeName: type,
          adFor: adFor,
          title: title,
          description: description,
          beds: rooms,
          floor: floor,
          baths: baths,
          condition: status,
          imageUrl: image,
          yearOfConstruction: year,
          area: area,
          cityName: city,
          countryName: country,
          address: address,
          postCode: zip,
          price: price,
          garden: garden,
          feature: {
            id: 0,
            airConditioning: airConditioning,
            barbeque: barbeque,
            dryer: dryer,
            gym: gym,
            laundry: laundry,
            lawn: lawn,
            kitchen: kitchen,
            outdoorShower: outdoorShower,
            refrigerator: refrigerator,
            sauna: sauna,
            swimmingPool: swimmingPool,
            tvCable: tvCable,
            washer: washer,
            wifi: wifi,
            windowCoverings: windowCoverings,
          },
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.status === "Success") {
            navigate({ pathname: `/details/${id.id}` });
          }
        });
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="col-lg-12 mb10" ref={divRef}>
          <div className="breadcrumb_content style2">
            <h2 className="breadcrumb_title">Edit Property</h2>
            <p>We are glad to see you again!</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="my_dashboard_review">
            <form className="row" onSubmit={onFormSubmit}>
              <div className="col-lg-12">
                <h4 className="mb30">Edit Property</h4>
                <span className="warning">All fields is required</span>
                <div>
                  <span className="title-error">{userError}</span>
                </div>
                <div className="my_profile_setting_input form-group">
                  <label htmlFor="propertyTitle">Property Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    id="title"
                    defaultValue={property.title}
                  />
                </div>
                <div>
                  <span className="image-error">{userError}</span>
                </div>
                <div className="my_profile_setting_input form-group">
                  <label htmlFor="propertyImage">Property ImageUrl</label>
                  <input
                    type="text"
                    className="form-control"
                    name="image"
                    id="image"
                    defaultValue={property.imageUrl}
                  />
                </div>
              </div>
              <div>
                <span className="description-error">{userError}</span>
              </div>
              <div className="col-lg-12">
                <div className="my_profile_setting_textarea">
                  <label htmlFor="propertyDescription">Description</label>
                  <textarea
                    className="form-control"
                    rows="7"
                    name="description"
                    id="description"
                    defaultValue={property.description}
                  ></textarea>
                </div>
              </div>

              <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input ui_kit_select_search form-group">
                  <div>
                    <span className="type-error">{userError}</span>
                  </div>
                  <label>Type</label>
                  <select
                    className="custompicker"
                    data-live-search="true"
                    data-width="100%"
                    name="type"
                    id="type"
                    defaultValue={property.type}
                  >
                    <option data-tokens="type1">House</option>
                    <option data-tokens="Type2">Apartment</option>
                    <option data-tokens="Type3">Bungalow</option>
                    <option data-tokens="Type4">Condo</option>
                    <option data-tokens="Type5">Land</option>
                    <option data-tokens="Type5">Single Family</option>
                    <option data-tokens="Type5">Double Family</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input ui_kit_select_search form-group">
                  <div>
                    <span className="status-error">{userError}</span>
                  </div>
                  <label>Status</label>
                  <select
                    className="custompicker"
                    data-live-search="true"
                    data-width="100%"
                    name="status"
                    id="status"
                    defaultValue={property.condition}
                  >
                    <option data-tokens="Status1">New Build</option>
                    <option data-tokens="Status2">Renovated House</option>
                    <option data-tokens="Status3">Must be Renovated</option>
                    <option data-tokens="Status4">Old House</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="my_profile_setting_input form-group">
                  <div>
                    <span className="price-error">{userError}</span>
                  </div>
                  <label htmlFor="formGroupExamplePrice">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    id="price"
                    defaultValue={property.price}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="my_profile_setting_input form-group">
                  <div>
                    <span className="area-error">{userError}</span>
                  </div>
                  <label htmlFor="formGroupExampleArea">Area</label>
                  <input
                    type="text"
                    className="form-control"
                    name="area"
                    id="area"
                    defaultValue={property.area}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="my_profile_setting_input ui_kit_select_search form-group">
                  <div>
                    <span className="rooms-error">{userError}</span>
                  </div>
                  <label>Rooms</label>
                  <select
                    className="custompicker"
                    data-live-search="true"
                    data-width="100%"
                    name="rooms"
                    id="rooms"
                    defaultValue={property.beds}
                  >
                    <option data-tokens="Status1">1</option>
                    <option data-tokens="Status2">2</option>
                    <option data-tokens="Status3">3</option>
                    <option data-tokens="Status4">4</option>
                    <option data-tokens="Status5">5</option>
                    <option data-tokens="Status6">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="my_profile_setting_input ui_kit_select_search form-group">
                  <div>
                    <span className="baths-error">{userError}</span>
                  </div>
                  <label>Baths</label>
                  <select
                    className="custompicker"
                    data-live-search="true"
                    data-width="100%"
                    name="baths"
                    id="baths"
                    defaultValue={property.baths}
                  >
                    <option data-tokens="Status1">1</option>
                    <option data-tokens="Status2">2</option>
                    <option data-tokens="Status3">3</option>
                    <option data-tokens="Status4">4</option>
                    <option data-tokens="Status5">5</option>
                    <option data-tokens="Status6">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="my_profile_setting_input ui_kit_select_search form-group">
                  <div>
                    <span className="floor-error">{userError}</span>
                  </div>
                  <label>Floor</label>
                  <select
                    className="custompicker"
                    data-live-search="true"
                    data-width="100%"
                    name="floor"
                    id="floor"
                    defaultValue={property.floor}
                  >
                    <option data-tokens="Status1">1</option>
                    <option data-tokens="Status2">2</option>
                    <option data-tokens="Status3">3</option>
                    <option data-tokens="Status4">4</option>
                    <option data-tokens="Status5">5</option>
                    <option data-tokens="Status6">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="my_profile_setting_input form-group">
                  <div>
                    <span className="adFor-error">{userError}</span>
                  </div>
                  <label>Ad For</label>
                  <select
                    className="custompicker"
                    data-live-search="true"
                    data-width="100%"
                    name="adFor"
                    id="adFor"
                  >
                    <option data-tokens="Buy">Buy</option>
                    <option data-tokens="Rent">Rent</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="my_profile_setting_input form-group">
                  <div>
                    <span className="year-error">{userError}</span>
                  </div>
                  <label htmlFor="formGroupExampleArea">
                    Year of construction
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="year"
                    id="year"
                    defaultValue={property.yearOfConstruction}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <h4 className="mb30">Location</h4>
                <div className="my_profile_setting_input form-group">
                  <div>
                    <span className="address-error">{userError}</span>
                  </div>
                  <label htmlFor="propertyAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    defaultValue={
                      property.streetName + " " + property.streetNumber
                    }
                  />
                </div>
              </div>

              <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                  <div>
                    <span className="city-error">{userError}</span>
                  </div>
                  <label htmlFor="propertyCity">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    id="city"
                    defaultValue={property.city}
                  />
                </div>
              </div>

              <div className="col-lg-4 col-xl-4">
                <div className="my_profile_setting_input form-group">
                  <div>
                    <span className="zip-error">{userError}</span>
                  </div>
                  <label htmlFor="zipCode">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    name="zip"
                    id="zip"
                    defaultValue={property.postCode}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-xl-4">
                <div className="my_profile_setting_input ui_kit_select_search form-group">
                  <div>
                    <span className="country-error">{userError}</span>
                  </div>
                  <label>Country</label>
                  <select
                    className="custompicker"
                    data-live-search="true"
                    data-width="100%"
                    name="country"
                    defaultValue={property.country}
                    id="country"
                  >
                    <option data-tokens="Turkey">Turkey</option>
                    <option data-tokens="Iran">Iran</option>
                    <option data-tokens="Iraq">Iraq</option>
                    <option data-tokens="Spain">Spain</option>
                    <option data-tokens="Greece">Greece</option>
                    <option data-tokens="Bulgaria">Bulgaria</option>
                    <option data-tokens="Germany">Germany</option>
                    <option data-tokens="England">England</option>
                    <option data-tokens="France">France</option>
                    <option data-tokens="Belgium">Belgium</option>
                    <option data-tokens="Macedonia">Macedonia</option>
                    <option data-tokens="Romania">Romania</option>
                  </select>
                </div>
              </div>

              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2">
                <ul className="ui_kit_checkbox selectable-list">
                  {Object.entries(feature)
                    .slice(1, 6)
                    .map(([key, value]) => (
                      <li key={key}>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={`customCheck${counter}`}
                            defaultChecked={value === true ? true : false}
                            name={key}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={`customCheck${counter++}`}
                          >
                            {key}
                          </label>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2">
                <ul className="ui_kit_checkbox selectable-list">
                  {Object.entries(feature)
                    .slice(6, 11)
                    .map(([key, value]) => (
                      <li key={key}>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={`customCheck${counter}`}
                            defaultChecked={value === true ? true : false}
                            name={key}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={`customCheck${counter++}`}
                          >
                            {key}
                          </label>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2">
                <ul className="ui_kit_checkbox selectable-list">
                  {Object.entries(feature)
                    .slice(11, 16)
                    .map(([key, value]) => (
                      <li key={key}>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={`customCheck${counter}`}
                            defaultChecked={value === true ? true : false}
                            name={key}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={`customCheck${counter++}`}
                          >
                            {key}
                          </label>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="col-xl-12">
                <div className="my_profile_setting_input">
                  <button className="btn btn2 float-right">Update</button>
                </div>
              </div>
            </form>
          </div>

          {/* <div className="my_dashboard_review mt30">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="mb30">Property media</h4>
            </div>
            <div className="col-lg-12">
              <ul className="mb0">
                <li className="list-inline-item">
                  <div className="portfolio_item">
                    <img
                      className="img-fluid"
                      src="images/property/fp1.jpg"
                      alt="fp1.jpg"
                    />
                    <div
                      className="edu_stats_list"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                      data-original-title="Delete"
                    >
                      <Link to="#">
                        <span className="flaticon-garbage"></span>
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="portfolio_item">
                    <img
                      className="img-fluid"
                      src="images/property/fp2.jpg"
                      alt="fp2.jpg"
                    />
                    <div
                      className="edu_stats_list"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                      data-original-title="Delete"
                    >
                      <Link to="#">
                        <span className="flaticon-garbage"></span>
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="portfolio_item">
                    <img
                      className="img-fluid"
                      src="images/property/fp3.jpg"
                      alt="fp3.jpg"
                    />
                    <div
                      className="edu_stats_list"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                      data-original-title="Delete"
                    >
                      <Link to="#">
                        <span className="flaticon-garbage"></span>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-12">
              <div className="portfolio_upload">
                <input type="file" name="myfile" />
                <div className="icon">
                  <span className="flaticon-download"></span>
                </div>
                <p>Drag and drop images here</p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="resume_uploader mb30">
                <h4>Attachments</h4>
                <form className="form-inline">
                  <input className="upload-path" />
                  <label className="upload">
                    <input type="file" />
                    Select Attachment
                  </label>
                </form>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="my_profile_setting_input">
                <button className="btn btn1 float-left">Back</button>
                <button className="btn btn2 float-right">Next</button>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </>
    );
  }
}

export default EditProperty;
