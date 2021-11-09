import MainItem from "./MainItem";

function Main() {
  const elements = []; //..some array

  const data = {
    about : 'htmlFor Rent',
    price : 13.000,
    interval : 'mo',
    type : 'Apartment',
    typeDetail : 'Renovated Apartment',
    address : '1421 San Pedro St, Los Angeles, CA 90015',
    beds : 4,
    baths : 2,
    square : 5280,
    agent : 'Seyhan Akifov',
    yearsAgo : 4  
  }

  const items = [1, 1, 1, 1];

  // for (const [index, value] of elements.entries()) {
  //   items.push(<Element key={index} />);
  // }

  for (let index = 0; index < items.length; index++) {
    if (items.length > 0)
    elements.push(<MainItem data = {data}/>)
    else{
    elements.push(<p>No Items</p>)
    break;
    }
  }



  return (
    <section id="feature-property" className="feature-property bgc-f7">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <a href="#feature-property">
              <div className="mouse_scroll">
                <div className="icon">
                  <h4>Scroll Down</h4>
                  <p>to discover more</p>
                </div>
                <div className="thumb">
                  <img src="images/resource/mouse.png" alt="mouse.png"></img>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="container ovh">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="main-title text-center mb40">
              <h2>Featured Properties</h2>
              <p>Handpicked properties by our team.</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="feature_property_slider">
              
              {elements}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
