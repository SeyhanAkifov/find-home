import { Route, Link, Switch } from "react-router-dom";

function MainItem (params) {
  console.log(params.data)
  return (
     
        <div className="item">
                    <div className="feat_property">
                      <div className="thumb">
                       
                        <img
                          className="img-whp"
                          src="./images/house.jpg"
                          alt="fp2.jpg"
                        ></img>
                        <div className="thmb_cntnt">
                          <ul className="tag mb0">
                            <li className="list-inline-item">
                              <a href="#">{params.data.propertyType}</a><p>{params.data.condition}</p>
                            </li>
                          </ul>
                          <ul className="icon mb0">
                            <li className="list-inline-item">
                              <a href="#">
                                <span className="flaticon-transfer-1"></span>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <span className="flaticon-heart"></span>
                              </a>
                            </li>
                          </ul>
                          <a className="fp_price" href="#">
                            ${params.data.price}<small>/</small>
                          </a>
                        </div>
                      </div>
                      <div className="details">
                        <div className="tc_content">
                          <p className="text-thm"></p>
                          <h4></h4>
                          <p>
                            <span className="flaticon-placeholder">{params.data.postCode} {params.data.streetName} {params.data.streetNumber} {params.data.cityName}</span>
                          </p>
                          <ul className="prop_details mb0">
                            <li className="list-inline-item">
                              <a href="#">Beds: {params.data.beds}</a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">Baths: {params.data.baths}</a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">Sq Ft:{params.data.area} </a>
                            </li>
                          </ul>
                        </div>
                        <div className="fp_footer">
                          <ul className="fp_meta float-left mb0">
                            <li className="list-inline-item">
                              <a href="#">
                                <img
                                  src="images/property/pposter1.png"
                                  alt="pposter1.png"
                                ></img>
                              </a>
                            </li>
                            <li><Link to={`/details/${params.data.id}`}>
                <span className="title">Details</span>
              </Link></li>
                            <li className="list-inline-item">
                              <a href="#"></a>
                            </li>
                          </ul>
                          <div className="fp_pdate float-right">
                             {params.data.YearsAgo} years ago
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
    )
}

export default MainItem;