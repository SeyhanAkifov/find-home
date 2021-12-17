import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import MainItem from "./MainItem";
import { useContext, useState, useRef } from "react";
import AuthContext from "../contexts/AuthContext";
import "../Styles/Main.css";


function Main() {
  const [currentPage, setCurrentPage] = useState(0);
  const [page, setPage] = useState(1);
  const divRef = useRef(null);
  const pageOnSite = 6;
  const pageCount = 1;

  function OnNext() {
    setCurrentPage(currentPage + pageOnSite);
    setPage(page + pageCount);

    if (divRef.current) {
      divRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  function OnPrevious() {
    setCurrentPage(currentPage - pageOnSite);
    setPage(page - pageCount);
    
    if (divRef.current) {
      divRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  const token = useContext(AuthContext);
  const url = `https://apifindhome.seyhanakifov.com/api/Home/Get?page=${currentPage}`;
  const [items, error, isLoaded] = useFetch(url, token, currentPage);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <section
        id="feature-property"
        className="feature-property bgc-f7"
        ref={divRef}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Link to="#feature-property">
                <div className="mouse_scroll">
                  <div className="icon">
                    <h4>Scroll Down</h4>
                    <p>to discover more</p>
                  </div>
                  <div className="thumb">
                    <img src="/images/resource/mouse.png" alt="mouse.png"></img>
                  </div>
                </div>
              </Link>
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
                {items.map((item) => (
                  <MainItem key={item.id} data={item}></MainItem>
                ))}
              </div>
            </div>
          </div>
        </div>
        {items.length > 0 ? (
          <div className="col-xl-12">
            <div className="my_profile_setting_input">
              {currentPage === 0 ? (
                <>
                  {page * pageOnSite <= items.length ? (
                    <button id="next" className="btn btn2 float-right" onClick={OnNext}>
                      Next
                    </button>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <>
                  <button id="prev" className="btn btn1 float-left" onClick={OnPrevious}>
                    Previous
                  </button>

                  {page * pageOnSite > items.length ? (
                    ""
                  ) : (
                    <button className="btn btn2 float-right" onClick={OnNext}>
                      Next
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    );
  }
}

export default Main;
