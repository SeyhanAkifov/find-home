import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function MainItem(params) {
  const token = useContext(AuthContext);
  let navigate = useNavigate();
  
  console.log(params.data);
  return (
    <div className="item">
      <div className="feat_property">
        <div className="thumb">
          <img className="img-whp" src="./images/house.jpg" alt="fp2.jpg"></img>
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
              <small>/</small>
            </Link>
          </div>
        </div>
        <div className="details">
          <div className="tc_content">
            <p className="text-thm"></p>
            <h4>My Title</h4>
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
            </ul>
          </div>
          <div className="fp_footer">
            <ul className="fp_meta float-left mb0">
              <li className="list-inline-item">
                <Link to="#">
                  <img
                    src="images/property/pposter1.png"
                    alt="pposter1.png"
                  ></img>
                </Link>
              </li>
              <li>
                <Link to={token.token ? `/details/${params.data.id}` : '/login'}>
                  <span className="title">Details</span>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#"></Link>
              </li>
            </ul>
            <div className="fp_pdate float-right">
              {params.data.YearsAgo} years ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainItem;
