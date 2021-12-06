import { useNavigate } from "react-router-dom";

function CityItem(params) {
  let navigate = useNavigate();

  function OnClick(e) {
    e.preventDefault()

    let city = e.currentTarget.querySelector(".details h4").innerText;
    navigate({ pathname : `/search/location=${city}`})
  }

  return (
    <div className={`col-lg-${params.data.size} col-xl-${params.data.size}`}  onClick={OnClick}>
      <div className="properti_city">
        <div className="thumb">
          <img
            className="img-fluid w100"
            src={`/images/${params.data.city.toLowerCase()}.jpg`}
            alt="pc1.jpg"
          ></img>
        </div>
        <div className="overlay">
          <div className="details">
            <h4>{params.data.city}</h4>
            <p>Properties: {params.data.properties}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityItem;
