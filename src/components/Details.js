import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Details({token}) {
  let id = useParams();
console.log(token);
  const [property, setProperty] = useState([]);

  useEffect( () => {
     fetch(
      `https://localhost:44382/api/Home/GetWithId?id=${id.id}`,
      {
         headers : {
            Authorization: `Bearer ${token}`,
           }
          }
    )
    .then((res) => res.json())
      .then((data) => setProperty(data));
  }, [id.id, token]);

  console.log(property);
  
  return (
    <section className="our-agent-single pb30-991">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                <div className="listing_single_description">
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
                    Evans Tower very high demand corner junior one bedroom plus
                    Link large balcony boasting full open NYC views. You need to
                    see the views to believe them. Mint condition with new
                    hardwood floors. Lots of closets plus washer and dryer.
                  </p>
                  <p className="gpara second_para white_goverlay mt10 mb10">
                    Fully furnished. Elegantly appointed condominium unit
                    situated on premier location. PS6. The wide entry hall leads
                    to Link large living room with dining area. This expansive 2
                    bedroom and 2 renovated marble bathroom apartment has great
                    windows. Despite the interior views, the apartments Southern
                    and Eastern exposures allow htmlFor lovely natural light to
                    fill every room. The master suite is surrounded by
                    handcrafted milkwork and features incredible walk-in closet
                    and storage space.
                  </p>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      <p className="mt10 mb10">
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
                      <p className="mt10 mb10">
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
                            <span>{property.size} Sq Ft</span>
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
                            <span>{property.garden ? 'Yes' : 'No'}</span>
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
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>Air
                            Conditioning
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>Barbeque
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>Dryer
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>Gym
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>Laundry
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                      <ul className="order_list list-inline-item">
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>Lawn
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>Microwave
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>Outdoor
                            Shower
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>Refrigerator
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>Sauna
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                      <ul className="order_list list-inline-item">
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>Swimming Pool
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>TV Cable
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>Washer
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>WiFi
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="flaticon-tick"></span>Window
                            Coverings
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-4">
            <div className="sidebar_listing_list">
              <div className="sidebar_advanced_search_widget">
                <div className="sl_creator">
                  <h4 className="mb25">Listed By</h4>
                  <div className="media">
                    <img
                      className="mr-3"
                      src="images/team/lc1.png"
                      alt="lc1.png"
                    />
                    <div className="media-body">
                      <h5 className="mt-0 mb0">Samul Williams</h5>
                      <p className="mb0">(123)456-7890</p>
                      <p className="mb0">info@findhouse.com</p>
                      <Link className="text-thm" to="#">
                        View My Listing
                      </Link>
                    </div>
                  </div>
                </div>
                <ul className="sasw_list mb0">
                  <li className="search_area">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName1"
                        placeholder="Your Name"
                      />
                    </div>
                  </li>
                  <li className="search_area">
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputName2"
                        placeholder="Phone"
                      />
                    </div>
                  </li>
                  <li className="search_area">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail"
                        placeholder="Email"
                      />
                    </div>
                  </li>
                  <li className="search_area">
                    <div className="form-group">
                      <textarea
                        id="htmlForm_message"
                        name="htmlForm_message"
                        className="form-control required"
                        rows="5"
                        required="required"
                        placeholder="I'm interest in [ Listing Single ]"
                      ></textarea>
                    </div>
                  </li>
                  <li>
                    <div className="search_option_button">
                      <button type="submit" className="btn btn-block btn-thm">
                        Search
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar_listing_list">
              <div className="sidebar_advanced_search_widget">
                <ul className="sasw_list mb0">
                  <li className="search_area">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName1"
                        placeholder="keyword"
                      />
                      <label htmlFor="exampleInputEmail">
                        <span className="flaticon-magnifying-glass"></span>
                      </label>
                    </div>
                  </li>
                  <li className="search_area">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail"
                        placeholder="Location"
                      />
                      <label htmlFor="exampleInputEmail">
                        <span className="flaticon-maps-and-flags"></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="search_option_two">
                      <div className="candidate_revew_select">
                        <select className="selectpicker w100 show-tick">
                          <option>Status</option>
                          <option>Apartment</option>
                          <option>Bungalow</option>
                          <option>Condo</option>
                          <option>House</option>
                          <option>Land</option>
                          <option>Single Family</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="search_option_two">
                      <div className="candidate_revew_select">
                        <select className="selectpicker w100 show-tick">
                          <option>Property Type</option>
                          <option>Apartment</option>
                          <option>Bungalow</option>
                          <option>Condo</option>
                          <option>House</option>
                          <option>Land</option>
                          <option>Single Family</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="small_dropdown2">
                      <div id="prncgs2" className="btn dd_btn">
                        <span>Price</span>
                        <label htmlFor="exampleInputEmail2">
                          <span className="fa fa-angle-down"></span>
                        </label>
                      </div>
                      <div className="dd_content2">
                        <div className="pricing_acontent">
                          <span id="slider-range-value1"></span>
                          <span className="mt0" id="slider-range-value2"></span>
                          <div id="slider"></div>
                          <input
                            type="text"
                            className="amount"
                            placeholder="$52,239"
                          />
                          <input
                            type="text"
                            className="amount2"
                            placeholder="$985,14"
                          />
                          <div className="slider-range"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="search_option_two">
                      <div className="candidate_revew_select">
                        <select className="selectpicker w100 show-tick">
                          <option>Bathrooms</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="search_option_two">
                      <div className="candidate_revew_select">
                        <select className="selectpicker w100 show-tick">
                          <option>Bedrooms</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="search_option_two">
                      <div className="candidate_revew_select">
                        <select className="selectpicker w100 show-tick">
                          <option>Garages</option>
                          <option>Yes</option>
                          <option>No</option>
                          <option>Others</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="search_option_two">
                      <div className="candidate_revew_select">
                        <select className="selectpicker w100 show-tick">
                          <option>Year built</option>
                          <option>2013</option>
                          <option>2014</option>
                          <option>2015</option>
                          <option>2016</option>
                          <option>2017</option>
                          <option>2018</option>
                          <option>2019</option>
                          <option>2020</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li className="min_area list-inline-item">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName2"
                        placeholder="Min Area"
                      />
                    </div>
                  </li>
                  <li className="max_area list-inline-item">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName3"
                        placeholder="Max Area"
                      />
                    </div>
                  </li>
                  <li></li>
                  <li>
                    <div className="search_option_button">
                      <button type="submit" className="btn btn-block btn-thm">
                        Search
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
