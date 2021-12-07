import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { useEffect, useRef } from "react";


function CreateProperty() {
let navigate = useNavigate();
  const {token, email } = useContext(AuthContext);
  const [error, setError] = useState ([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
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
    if(!token){
      navigate({ pathname : '/login'})
    }
  }, [token, navigate])
  
  const onFormSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
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
    // console.log(title);
    // console.log(description);
    // console.log(type);
    // console.log(status);
    // console.log(price);
    // console.log(area);
    // console.log(rooms);
    // console.log(baths);
    // console.log(floor);
    // console.log(adFor);
    // console.log(year);
    // console.log(address);
    // console.log(city);
    // console.log(country);
    // console.log(zip);
    
    // console.log(airConditioning);
    // console.log(lawn);
    // console.log(swimmingPool);
    // console.log(barbeque);
    // console.log(kitchen);
    // console.log(tvCable);
    // console.log(dryer);
    // console.log(outdoorShower);
    // console.log(washer);
    // console.log(gym);
    // console.log(refrigerator);
    // console.log(wifi);
    // console.log(laundry);
    // console.log(sauna);
    // console.log(windowCoverings);
    // console.log(email);

    fetch('https://localhost:44382/api/Home/Post', {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body : JSON.stringify({
        
          "creator" : email,
          "typeName": type,
          "adFor": adFor,
          "title": title,
          "description": description,
          "beds": rooms,
          "floor": floor,
          "baths": baths,
          "condition": status,
          "imageUrl" : image,
          "yearOfConstruction": year,
          "area": area,
          "cityName": city,
          "countryName": country,
          "address": address,
          "postCode" : zip,
          "price": price,
          "garden": garden,
          "feature": {
            "id": 0,
            "airConditioning": airConditioning,
            "barbeque": barbeque,
            "dryer": dryer,
            "gym": gym,
            "laundry": laundry,
            "lawn": lawn,
            "kitchen": kitchen,
            "outdoorShower": outdoorShower,
            "refrigerator": refrigerator,
            "sauna": sauna,
            "swimmingPool": swimmingPool,
            "tvCable": tvCable,
            "washer": washer,
            "wifi": wifi,
            "windowCoverings": windowCoverings
          
        }
        
      })

      
      
    })
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        
        if (result.errors) {
          
          setError([result.title]);
          setIsLoaded(false)
          
        }else if(result.isSuccessStatusCode === false){
          setError(result.reasonPhrase);
          setIsLoaded(false)
        }
        else{
          setIsLoaded(true)
          
          navigate({ pathname: "/home" });
        
        }
        
      },
      // Note: it's important to handle errors here
      // instead of Link catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setIsLoaded(true);
        setError(error);
       }
    );
  };

  return (
    <>
      <div className="col-lg-12 mb10" ref={divRef}>
        <div className="breadcrumb_content style2">
          <h2 className="breadcrumb_title">Add New Property</h2>
          <p>We are glad to see you again!</p>
        </div>
      </div>
      <div className="col-lg-12">
        <span>{error}</span>
        <div className="my_dashboard_review">
          <form className="row" onSubmit={onFormSubmit}>
            <div className="col-lg-12">
              <h4 className="mb30">Create Listing</h4>
              <span>All fields is required</span>
              <div className="my_profile_setting_input form-group">
                <label htmlFor="propertyTitle">Property Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="propertyTitle"
                  name="title"
                />
              </div>
              <div className="my_profile_setting_input form-group">
                <label htmlFor="propertyImage">Property ImageUrl</label>
                <input
                  type="text"
                  className="form-control"
                  id="propertyImage"
                  name="image"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="my_profile_setting_textarea">
                <label htmlFor="propertyDescription">Description</label>
                <textarea
                  className="form-control"
                  id="propertyDescription"
                  rows="7"
                  name="description"
                ></textarea>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="my_profile_setting_input ui_kit_select_search form-group">
                <label>Type</label>
                <select
                  className="custompicker"
                  data-live-search="true"
                  data-width="100%"
                  name="type"
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
                <label>Status</label>
                <select
                  className="custompicker"
                  data-live-search="true"
                  data-width="100%"
                  name="status"
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
                <label htmlFor="formGroupExamplePrice">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExamplePrice"
                  name="price"
                />
              </div>
            </div>
            <div className="col-lg-4 col-xl-4">
              <div className="my_profile_setting_input form-group">
                <label htmlFor="formGroupExampleArea">Area</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleArea"
                  name="area"
                />
              </div>
            </div>
            <div className="col-lg-4 col-xl-4">
              <div className="my_profile_setting_input ui_kit_select_search form-group">
                <label>Rooms</label>
                <select
                  className="custompicker"
                  data-live-search="true"
                  data-width="100%"
                  name="rooms"
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
                <label>Baths</label>
                <select
                  className="custompicker"
                  data-live-search="true"
                  data-width="100%"
                  name="baths"
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
                <label>Floor</label>
                <select
                  className="custompicker"
                  data-live-search="true"
                  data-width="100%"
                  name="floor"
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
                <label htmlFor="formGroupExampleArea">Ad htmlFor</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleArea"
                  name="adFor"
                />
              </div>
            </div>
            <div className="col-lg-4 col-xl-4">
              <div className="my_profile_setting_input form-group">
                <label htmlFor="formGroupExampleArea">
                  Year of construction
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleArea"
                  name="year"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <h4 className="mb30">Location</h4>
              <div className="my_profile_setting_input form-group">
                <label htmlFor="propertyAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="propertyAddress"
                  name="address"
                />
              </div>
            </div>

            <div className="col-lg-6 col-xl-6">
              <div className="my_profile_setting_input form-group">
                <label htmlFor="propertyCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="propertyCity"
                  name="city"
                />
              </div>
            </div>

            <div className="col-lg-4 col-xl-4">
              <div className="my_profile_setting_input form-group">
                <label htmlFor="zipCode">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zipCode"
                  name="zip"
                />
              </div>
            </div>
            <div className="col-lg-4 col-xl-4">
              <div className="my_profile_setting_input ui_kit_select_search form-group">
                <label>Country</label>
                <select
                  className="custompicker"
                  data-live-search="true"
                  data-width="100%"
                  name="country"
                >
                  <option data-tokens="Turkey">Turkey</option>
                  <option data-tokens="Iran">Iran</option>
                  <option data-tokens="Iraq">Iraq</option>
                  <option data-tokens="Spain">Spain</option>
                  <option data-tokens="Greece">Greece</option>
                  <option data-tokens="Portugal">Bulgaria</option>
                  <option data-tokens="Portugal">Germany</option>
                  <option data-tokens="Portugal">England</option>
                  <option data-tokens="Portugal">France</option>
                  <option data-tokens="Portugal">Belgium</option>
                  <option data-tokens="Portugal">Macedonia</option>
                  <option data-tokens="Portugal">Romania</option>
                </select>
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2">
              <ul className="ui_kit_checkbox selectable-list">
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                      name="airConditioning"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Air Conditioning
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck2"
                      name="lawn"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck2"
                    >
                      Lawn
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck3"
                      name="swimmingPool"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck3"
                    >
                      Swimming Pool
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck4"
                      name="barbeque"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck4"
                    >
                      Barbeque
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck5"
                      name="kitchen"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck5"
                    >
                      Kitchen
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2">
              <ul className="ui_kit_checkbox selectable-list">
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck6"
                      name="tvCable"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck6"
                    >
                      TV Cable
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck7"
                      name="dryer"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck7"
                    >
                      Dryer
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck8"
                      name="outdoorShower"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck8"
                    >
                      Outdoor Shower
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck8"
                      name="garden"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck8"
                    >
                      Garden
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck9"
                      name="washer"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck9"
                    >
                      Washer
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck10"
                      name="gym"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck10"
                    >
                      Gym
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2">
              <ul className="ui_kit_checkbox selectable-list">
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck11"
                      name="refrigerator"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck11"
                    >
                      Refrigerator
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck12"
                      name="wifi"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck12"
                    >
                      WiFi
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck13"
                      name="laundry"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck13"
                    >
                      Laundry
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck14"
                      name="sauna"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck14"
                    >
                      Sauna
                    </label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck15"
                      name="windowCoverings"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck15"
                    >
                      Window Coverings
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-12">
              <div className="my_profile_setting_input">
                <button className="btn btn1 float-left">Clear</button>
                <button className="btn btn2 float-right">Create</button>
              </div>
              <span>{error}</span>
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

export default CreateProperty;
