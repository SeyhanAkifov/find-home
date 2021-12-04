function CityItem (params) {
    
    return (
        <div className={`col-lg-${params.data.size} col-xl-${params.data.size}`}>
        <div className="properti_city">
          <div className="thumb">
            <img
              className="img-fluid w100"
              src={`images/${params.data.city.toLowerCase()}.jpg`}
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
    )
}

export default CityItem;