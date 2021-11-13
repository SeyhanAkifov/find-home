import Header from "./components/Header";
import Footer from "./components/Footer";
import OurPartners from "./components/OurPartners";
import HomeSearch from "./components/HomeSearch";
import Main from "./components/Main";
import CitySearch from "./components/CitySearch";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import OurBlog from "./components/OurBlog";
import SignUpModal from "./components/SignUpModal";
import Create from "./components/CreateProperty";
import { useState, useEffect } from "react";

import {Route, Link, Switch, Routes} from 'react-router-dom'

function App() {
  
  useEffect(() => {}, []);
  return (
    <div className="wrapper">
      <div className="preloader"></div>

      <Header  />

      <SignUpModal />

    
      <HomeSearch />

     <Routes>
      <Route path="/home" element={<Main />} />
      <Route path="/create" element={<Create />} />
      </Routes>
      
    
      

      <CitySearch />

      <WhyChooseUs />

      <Testimonials />

      

      <OurPartners />

      <Footer />

      <a className="scrollToHome" to="#">
        <i className="flaticon-arrows"></i>
      </a>
    </div>
  );
}

export default App;
