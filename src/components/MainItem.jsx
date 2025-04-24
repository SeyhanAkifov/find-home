import Link from "next/link";

function MainItem({ data }) {
  return (
    <div className="item">
      <div className="feat_property">
        <div className="thumb">
          <img className="img-whp" src={data.imageUrl} alt="house.jpg" />
          <div className="thmb_cntnt">
            <ul className="tag mb0">
              <li className="list-inline-item">
                <Link className="title" href="#">
                  {data.propertyType}
                </Link>
                <p>{data.condition}</p>
              </li>
            </ul>
            <ul className="icon mb0">
              <li className="list-inline-item">
                <Link href="#">
                  <span className="flaticon-transfer-1"></span>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="#">
                  <span className="flaticon-heart"></span>
                </Link>
              </li>
            </ul>
            <Link className="fp_price" href="#">
              ${data.price}
            </Link>
          </div>
        </div>
        <div className="details">
          <div className="tc_content">
            <p className="text-thm"></p>
            <h4>{data.title}</h4>
            <p>
              <span className="flaticon-placeholder">
                {data.postCode} {data.streetName} {data.streetNumber} {data.cityName}
              </span>
            </p>
            <ul className="prop_details mb0">
              <li className="list-inline-item">
                <span>Beds: {data.beds}</span>
              </li>
              <li className="list-inline-item">
                <span>Baths: {data.baths}</span>
              </li>
              <li className="list-inline-item">
                <span>Sq Ft: {data.area}</span>
              </li>
              <li>
                <div className="search_option_button">
                  <Link href={`/details/${data.id}`}>
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
