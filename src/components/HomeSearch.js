function HomeSearch () {
    return (
        <section className="home-one home1-overlay home1_bgi1">
        <div className="container">
          <div className="row posr">
            <div className="col-lg-12">
              <div className="home_content">
                <div className="home-text text-center">
                  <h2 className="fz55">Find Your Dream Home</h2>
                  <p className="fz18 color-white">
                    From as low as $10 per day with limited time offer
                    discounts.
                  </p>
                </div>
                <div className="home_adv_srch_opt">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Buy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Rent
                      </a>
                    </li>
                  </ul>
                  <div
                    className="tab-content home1_adsrchfrm"
                    id="pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="home1-advnc-search">
                        <ul className="h1ads_1st_list mb0">
                          <li className="list-inline-item">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputName1"
                                placeholder="Enter keyword..."
                              ></input>
                            </div>
                          </li>
                          <li className="list-inline-item">
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
                          <li className="list-inline-item">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail"
                                placeholder="Location"
                              ></input>
                              <label htmlFor="exampleInputEmail">
                                <span className="flaticon-maps-and-flags"></span>
                              </label>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="small_dropdown2">
                              <div id="prncgs" className="btn dd_btn">
                                <span>Price</span>
                                <label htmlFor="exampleInputEmail2">
                                  <span className="fa fa-angle-down"></span>
                                </label>
                              </div>
                              <div className="dd_content2">
                                <div className="pricing_acontent">
                                  <input
                                    type="text"
                                    className="amount"
                                    placeholder="$52,239"
                                  ></input>
                                  <input
                                    type="text"
                                    className="amount2"
                                    placeholder="$985,14"
                                  ></input>
                                  <div className="slider-range"></div>
                                  <span id="slider-range-value1"></span>
                                  <span id="slider-range-value2"></span>
                                  <div id="slider"></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="custome_fields_520 list-inline-item">
                            <div className="navbered">
                              <div className="mega-dropdown">
                                <span id="show_advbtn" className="dropbtn">
                                  Advanced{" "}
                                  <i className="flaticon-more pl10 flr-520"></i>
                                </span>
                                <div className="dropdown-content">
                                  <div className="row p15">
                                    <div className="col-lg-12">
                                      <h4 className="text-thm3">Amenities</h4>
                                    </div>
                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                      <ul className="ui_kit_checkbox selectable-list">
                                        <li>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck1"
                                            ></input>
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
                                            ></input>
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
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck3"
                                            >
                                              Swimming Pool
                                            </label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                      <ul className="ui_kit_checkbox selectable-list">
                                        <li>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck4"
                                            ></input>
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
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck5"
                                            >
                                              Microwave
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck6"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck6"
                                            >
                                              TV Cable
                                            </label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                      <ul className="ui_kit_checkbox selectable-list">
                                        <li>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck7"
                                            ></input>
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
                                            ></input>
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
                                              id="customCheck9"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck9"
                                            >
                                              Washer
                                            </label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                      <ul className="ui_kit_checkbox selectable-list">
                                        <li>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck10"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck10"
                                            >
                                              Gym
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck11"
                                            ></input>
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
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck12"
                                            >
                                              WiFi
                                            </label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                      <ul className="ui_kit_checkbox selectable-list">
                                        <li>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck13"
                                            ></input>
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
                                            ></input>
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
                                            ></input>
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
                                  </div>
                                  <div className="row p15 pt0-xsd">
                                    <div className="col-lg-11 col-xl-10">
                                      <ul className="apeartment_area_list mb0">
                                        <li className="list-inline-item">
                                          <div className="candidate_revew_select">
                                            <select className="selectpicker w100 show-tick">
                                              <option>Bathrooms</option>
                                              <option>1</option>
                                              <option>2</option>
                                              <option>3</option>
                                              <option>4</option>
                                              <option>5</option>
                                              <option>6</option>
                                              <option>7</option>
                                              <option>8</option>
                                            </select>
                                          </div>
                                        </li>
                                        <li className="list-inline-item">
                                          <div className="candidate_revew_select">
                                            <select className="selectpicker w100 show-tick">
                                              <option>Bedrooms</option>
                                              <option>1</option>
                                              <option>2</option>
                                              <option>3</option>
                                              <option>4</option>
                                              <option>5</option>
                                              <option>6</option>
                                              <option>7</option>
                                              <option>8</option>
                                            </select>
                                          </div>
                                        </li>
                                        <li className="list-inline-item">
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
                                        </li>
                                        <li className="list-inline-item">
                                          <div className="candidate_revew_select">
                                            <select className="selectpicker w100 show-tick">
                                              <option>Built-up Area</option>
                                              <option>Adana</option>
                                              <option>Ankara</option>
                                              <option>Antalya</option>
                                              <option>Bursa</option>
                                              <option>Bodrum</option>
                                              <option>Gaziantep</option>
                                              <option>İstanbul</option>
                                              <option>İzmir</option>
                                              <option>Konya</option>
                                            </select>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-lg-1 col-xl-2">
                                      <div className="mega_dropdown_content_closer">
                                        <h5 className="text-thm text-right mt15">
                                          <span
                                            id="hide_advbtn"
                                            className="curp"
                                          >
                                            Hide
                                          </span>
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="search_option_button">
                              <button type="submit" className="btn btn-thm">
                                Search
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="home1-advnc-search">
                        <ul className="h1ads_1st_list mb0">
                          <li className="list-inline-item">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputName2"
                                placeholder="Enter keyword..."
                              ></input>
                            </div>
                          </li>
                          <li className="list-inline-item">
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
                          <li className="list-inline-item">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail3"
                                placeholder="Location"
                              ></input>
                              <label htmlFor="exampleInputEmail3">
                                <span className="flaticon-maps-and-flags"></span>
                              </label>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="small_dropdown2">
                              <div id="prncgs2" className="btn dd_btn">
                                <span>Price</span>
                                <label htmlFor="exampleInputEmail4">
                                  <span className="fa fa-angle-down"></span>
                                </label>
                              </div>
                              <div className="dd_content2">
                                <div className="pricing_acontent">
                                  <input
                                    type="text"
                                    className="amount"
                                    placeholder="$52,239"
                                  ></input>
                                  <input
                                    type="text"
                                    className="amount2"
                                    placeholder="$985,14"
                                  ></input>
                                  <div className="slider-range"></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="custome_fields_520 list-inline-item">
                            <div className="navbered">
                              <div className="mega-dropdown">
                                <span id="show_advbtn2" className="dropbtn">
                                  Advanced{" "}
                                  <i className="flaticon-more pl10 flr-520"></i>
                                </span>
                                <div className="dropdown-content">
                                  <div className="row p15">
                                    <div className="col-lg-12">
                                      <h4 className="text-thm3">Amenities</h4>
                                    </div>
                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                      <ul className="ui_kit_checkbox selectable-list">
                                        <li>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck16"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck16"
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
                                              id="customCheck17"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck17"
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
                                              id="customCheck18"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck18"
                                            >
                                              Swimming Pool
                                            </label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                      <ul className="ui_kit_checkbox selectable-list">
                                        <li>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck19"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck19"
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
                                              id="customCheck20"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck20"
                                            >
                                              Microwave
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck21"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck21"
                                            >
                                              TV Cable
                                            </label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                      <ul className="ui_kit_checkbox selectable-list">
                                        <li>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck22"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck22"
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
                                              id="customCheck23"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck23"
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
                                              id="customCheck24"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck24"
                                            >
                                              Washer
                                            </label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                      <ul className="ui_kit_checkbox selectable-list">
                                        <li>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck25"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck25"
                                            >
                                              Gym
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck26"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck26"
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
                                              id="customCheck27"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck27"
                                            >
                                              WiFi
                                            </label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-xxs-6 col-sm col-lg col-xl">
                                      <ul className="ui_kit_checkbox selectable-list">
                                        <li>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="customCheck28"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck28"
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
                                              id="customCheck29"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck29"
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
                                              id="customCheck30"
                                            ></input>
                                            <label
                                              className="custom-control-label"
                                              htmlFor="customCheck30"
                                            >
                                              Window Coverings
                                            </label>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="row p15 pt0-xsd">
                                    <div className="col-lg-11 col-xl-10">
                                      <ul className="apeartment_area_list mb0">
                                        <li className="list-inline-item">
                                          <div className="candidate_revew_select">
                                            <select className="selectpicker w100 show-tick">
                                              <option>Bathrooms</option>
                                              <option>1</option>
                                              <option>2</option>
                                              <option>3</option>
                                              <option>4</option>
                                              <option>5</option>
                                              <option>6</option>
                                              <option>7</option>
                                              <option>8</option>
                                            </select>
                                          </div>
                                        </li>
                                        <li className="list-inline-item">
                                          <div className="candidate_revew_select">
                                            <select className="selectpicker w100 show-tick">
                                              <option>Bedrooms</option>
                                              <option>1</option>
                                              <option>2</option>
                                              <option>3</option>
                                              <option>4</option>
                                              <option>5</option>
                                              <option>6</option>
                                              <option>7</option>
                                              <option>8</option>
                                            </select>
                                          </div>
                                        </li>
                                        <li className="list-inline-item">
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
                                        </li>
                                        <li className="list-inline-item">
                                          <div className="candidate_revew_select">
                                            <select className="selectpicker w100 show-tick">
                                              <option>Built-up Area</option>
                                              <option>Adana</option>
                                              <option>Ankara</option>
                                              <option>Antalya</option>
                                              <option>Bursa</option>
                                              <option>Bodrum</option>
                                              <option>Gaziantep</option>
                                              <option>İstanbul</option>
                                              <option>İzmir</option>
                                              <option>Konya</option>
                                            </select>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-lg-1 col-xl-2">
                                      <div className="mega_dropdown_content_closer">
                                        <h5 className="text-thm text-right mt15">
                                          <span
                                            id="hide_advbtn2"
                                            className="curp"
                                          >
                                            Hide
                                          </span>
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="search_option_button">
                              <button type="submit" className="btn btn-thm">
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
            </div>
          </div>
        </div>
      </section>
    )
}

export default HomeSearch