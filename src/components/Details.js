import { useState, useEffect } from "react";
import Get from "../services/propertyServices";
import { useHistory, useParams } from "react-router-dom";

function Details() {
  let id = useParams();

  const [property, setProperty] = useState([]);

  useEffect(async () => {
    fetch(
      `http://apifindhome.seyhanakifov.com/api/Home/GetWithId?id=${id.id}`,
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2V5aGFuIiwianRpIjoiYWM5Zjc0OTctMTA2NS00ZjgxLWJlNWMtOTE3NGY3ZWQ3MTAzIiwiZXhwIjoxNjM2ODk3ODgyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjU5OTIxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.bL9Bc7Olqxld1lEuu2mS-zXlEb4UUmOogXxLy5QYLiU",
          expiration: "2021-11-14T13:51:22Z",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, []);

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
                        <a href="#">{}</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Beds: {property.beds}</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Baths: {property.baths}</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Sq Ft: {property.area}</a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="mb30">Description</h4>
                  <p className="mb25">
                    Evans Tower very high demand corner junior one bedroom plus
                    a large balcony boasting full open NYC views. You need to
                    see the views to believe them. Mint condition with new
                    hardwood floors. Lots of closets plus washer and dryer.
                  </p>
                  <p className="gpara second_para white_goverlay mt10 mb10">
                    Fully furnished. Elegantly appointed condominium unit
                    situated on premier location. PS6. The wide entry hall leads
                    to a large living room with dining area. This expansive 2
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
                        leads to a large living room with dining area. This
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
                        leads to a large living room with dining area. This
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
                    <a
                      className="text-thm fz14"
                      data-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Show More{" "}
                      <span className="flaticon-download-1 fz12"></span>
                    </a>
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
                          <p>Price :</p>
                        </li>
                        <li>
                          <p>Property Size :</p>
                        </li>
                        <li>
                          <p>Year Built :</p>
                        </li>
                      </ul>
                      <ul className="list-inline-item">
                        <li>
                          <p>
                            <span>HZ27</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>${property.price}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>1560 Sq Ft</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>2016-01-09</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <ul className="list-inline-item">
                        <li>
                          <p>Bedrooms :</p>
                        </li>
                        <li>
                          <p>Bathrooms :</p>
                        </li>
                        <li>
                          <p>Garage :</p>
                        </li>
                        <li>
                          <p>Garage Size :</p>
                        </li>
                      </ul>
                      <ul className="list-inline-item">
                        <li>
                          <p>
                            <span>8</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>4</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>2</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>200 SqFt</span>
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
                            <span>Apartment</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>htmlFor Sale</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="additional_details">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4 className="mb15">Additional details</h4>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <ul className="list-inline-item">
                        <li>
                          <p>Deposit :</p>
                        </li>
                        <li>
                          <p>Pool Size :</p>
                        </li>
                        <li>
                          <p>Additional Rooms :</p>
                        </li>
                      </ul>
                      <ul className="list-inline-item">
                        <li>
                          <p>
                            <span>20%</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>300 Sqft</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Guest Bath</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <ul className="list-inline-item">
                        <li>
                          <p>Last remodel year :</p>
                        </li>
                        <li>
                          <p>Amenities :</p>
                        </li>
                        <li>
                          <p>Equipment :</p>
                        </li>
                      </ul>
                      <ul className="list-inline-item">
                        <li>
                          <p>
                            <span>1987</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Clubhouse</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Grill - Gas</span>
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
                          <a href="#">
                            <span className="flaticon-tick"></span>Air
                            Conditioning
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="flaticon-tick"></span>Barbeque
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="flaticon-tick"></span>Dryer
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="flaticon-tick"></span>Gym
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="flaticon-tick"></span>Laundry
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                      <ul className="order_list list-inline-item">
                        <li>
                          <a href="#">
                            <span className="flaticon-tick"></span>Lawn
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="flaticon-tick"></span>Microwave
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="flaticon-tick"></span>Outdoor
                            Shower
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="flaticon-tick"></span>Refrigerator
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="flaticon-tick"></span>Sauna
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                      <ul className="order_list list-inline-item">
                        <li>
                          <a href="#">
                            <span className="flaticon-tick"></span>Swimming Pool
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="flaticon-tick"></span>TV Cable
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="flaticon-tick"></span>Washer
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="flaticon-tick"></span>WiFi
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="flaticon-tick"></span>Window
                            Coverings
                          </a>
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
                      <a className="text-thm" href="#">
                        View My Listing
                      </a>
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

            <div className="terms_condition_widget">
              <h4 className="title">Categories Property</h4>
              <div className="widget_list">
                <ul className="list_details">
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right mr10"></i>Apartment{" "}
                      <span className="float-right">6 properties</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right mr10"></i>Condo{" "}
                      <span className="float-right">12 properties</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right mr10"></i>Family House{" "}
                      <span className="float-right">8 properties</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right mr10"></i>Modern Villa{" "}
                      <span className="float-right">26 properties</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-caret-right mr10"></i>Town House{" "}
                      <span className="float-right">89 properties</span>
                    </a>
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
