function MainItem (params) {
    return (
        <div className="item">
                    <div className="feat_property">
                      <div className="thumb">
                        <img
                          className="img-whp"
                          src="images/property/fp2.jpg"
                          alt="fp2.jpg"
                        ></img>
                        <div className="thmb_cntnt">
                          <ul className="tag mb0">
                            <li className="list-inline-item">
                              <a href="#">{params.data.about}</a>
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
                            ${params.data.price}<small>/{params.data.interval}</small>
                          </a>
                        </div>
                      </div>
                      <div className="details">
                        <div className="tc_content">
                          <p className="text-thm">{params.data.type}</p>
                          <h4>{params.data.typeDetail}</h4>
                          <p>
                            <span className="flaticon-placeholder"></span> {params.data.address}
                          </p>
                          <ul className="prop_details mb0">
                            <li className="list-inline-item">
                              <a href="#">Beds: {params.data.beds}</a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">Baths: {params.data.baths}</a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">Sq Ft: {params.data.square}</a>
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
                            <li className="list-inline-item">
                              <a href="#">{params.data.agent}</a>
                            </li>
                          </ul>
                          <div className="fp_pdate float-right">
                            {params.data.yearsAgo} years ago
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    )
}

export default MainItem;