
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

 function HomeSearch(props, params) {
  
  let navigate = useNavigate();
 
    let url = "https://apifindhome.seyhanakifov.com/api/Home/GetTypes";

    const [items] = useFetch(url);
    
    function submitHandler(e) {
    e.preventDefault();
    let query = {
      type: e.target[1].value,
      location: e.target[2].value,
      min: e.target[3].value,
      max: e.target[4].value,
    };

    let url = `${query.type ? `type=` + query.type : ""}${
      query.location ? `&location=` + query.location : ""
    }${query.min ? `&min=` + query.min : ""}${
      query.max ? `&max=` + query.max : ""
    }`;
    
    navigate({
      pathname: `/search/${url}`,
    });
  }

  function OnClear(e){
    e.preventDefault()
    let form  = document.getElementById('pills-home');
    form.reset()
    console.log(form);
  }



  return (
    <section className="home-one home1-overlay home1_bgi1">
      <div className="container" >
        <div className="row posr">
          <div className="col-lg-12">
            <div className="home_content">
              <div className="home-text text-center">
                <h2 className="fz55">Find Your Dream Home</h2>
                <p className="fz18 color-white">
                  From as low as $10 per day with limited time offer discounts.
                </p>
              </div>
            
              <div className="home_adv_srch_opt">
                {/* <ul className="nav nav-pills" id="pills-tab" role="tablist">
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
                </ul> */}
               
                <div
                  className="tab-content home1_adsrchfrm"
                  id="pills-tabContent"
                >
                  <form
                    action="#"
                    onSubmit={submitHandler}
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="home1-advnc-search">
                      <ul className="h1ads_1st_list mb0">
                        <li className="list-inline-item">
                          
                            <div className="search_option_button">
                              <button onClick={OnClear} className="custompicker w100 show-tick btn btn-thm">Clear Inputs</button>
                            </div>
                          
                        </li>
                        <li className="list-inline-item">
                          <div className="search_option_two">
                            <div className="candidate_revew_select">
                              <select className="custompicker w100 show-tick" >
                                
                              <option value="asa" disabled>Select one--</option>
                              
                                    {items.map((item) => (
                                      <option key={item.id} value={item.name} >{item.name}</option>
                                    ))}
                                  
                                
                              </select>
                            </div>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="form-group">
                            <input
                              name="location"
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
                              <div className="slider">
                                <input
                                  type="text"
                                  className="amount"
                                  id="slider-range-value1"
                                  placeholder="$50000"
                                ></input>
                                <input
                                  type="text"
                                  className="amount2"
                                  id="slider-range-value2"
                                  placeholder="$130000"
                                ></input>
                                <div className="slider-range"></div>
                               
                                <div id="slider"></div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="list-inline-item">
                          <div className="search_option_button">
                            <button className="btn btn-thm">Search</button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSearch;
