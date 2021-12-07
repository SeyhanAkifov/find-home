import { Link } from "react-router-dom";


function MainItem(params) {
  

  
  return (
    <div className="item">
      <div className="feat_property">
        <div className="thumb">
          <img
            className="img-whp"
            src={params.data.imageUrl}
            alt="house.jpg"
          ></img>
          <div className="thmb_cntnt">
            <ul className="tag mb0">
              <li className="list-inline-item">
                <Link to="#">{params.data.propertyType}</Link>
                <p>{params.data.condition}</p>
              </li>
            </ul>
            <ul className="icon mb0">
              <li className="list-inline-item">
                <Link to="#">
                  <span className="flaticon-transfer-1"></span>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">
                  <span className="flaticon-heart"></span>
                </Link>
              </li>
            </ul>
            <Link className="fp_price" to="#">
              ${params.data.price}
              
            </Link>
          </div>
        </div>
        <div className="details">
          <div className="tc_content">
            <p className="text-thm"></p>
            <h4>{params.data.title}</h4>
            <p>
              <span className="flaticon-placeholder">
                {params.data.postCode} {params.data.streetName}{" "}
                {params.data.streetNumber} {params.data.cityName}
              </span>
            </p>
            <ul className="prop_details mb0">
              <li className="list-inline-item">
                <Link to="#">Beds: {params.data.beds}</Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">Baths: {params.data.baths}</Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">Sq Ft:{params.data.area} </Link>
              </li>
              <li>
                <div className="search_option_button">
                  <Link to={`/details/${params.data.id}`}>
                    <button className="custompicker w100 show-tick btn btn-thm">
                      Details
                    </button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainItem;
