"use client";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import MainItem from "./MainItem";

import { useParams } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import {AuthContext} from "../contexts/AuthContext";
import "../Styles/Main.css"

//http://apifindhome.seyhanakifov.com/api/Home/Get
function Main() {
  const token = useContext(AuthContext);

  const divRef = useRef(null);
  
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView(
        {
          behavior: 'smooth',
        })
    }
  });

  let query = useParams();
  const url = `https://localhost:44382/api/Property/Search?${query.query}`;
  const [items, error, isLoaded] = useFetch(url, token);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <section id="feature-property" className="feature-property bgc-f7" ref={divRef}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Link to="#feature-property">
                  {/* <div className="mouse_scroll">
                    <div className="icon">
                      <h4>Scroll Down</h4>
                      <p>to discover more</p>
                    </div>
                    <div className="thumb">
                      <img
                        src="/images/resource/mouse.png"
                        alt="mouse.png"
                      ></img>
                    </div>
                  </div> */}
                </Link>
              </div>
            </div>
          </div>
          <div className="container ovh">
            {items.length > 0 ? (
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="main-title text-center mb40">
                    <h2>Properties</h2>
                    <p>Founded properties</p>
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
            ) : (
              <h1>No Items Yet</h1>
            )}
          </div>
        </section>
      </>
    );
  }
}

export default Main;
