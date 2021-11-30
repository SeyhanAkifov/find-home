import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSearch from "./components/HomeSearch";
import Main from "./components/Main";
import MainSearch from "./components/MainSearch";
import CitySearch from "./components/CitySearch";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CreateProperty from "./components/CreateProperty";
import Register from "./components/Register";
import Login from "./components/Login";
import Details from "./components/Details";
import { Route, Routes, Link } from "react-router-dom";
import AuthContext from './contexts/AuthContext'
import React, { useState } from 'react';

function App() {
  const [token, setToken] = useState();

  console.log(token);
    
    return (
      <AuthContext.Provider value={token}>
    <div className="wrapper">
      <div className="preloader"></div>

      <Header  setToken={setToken}/>
      
      <HomeSearch />
      
      <Routes>
        <Route path="/home" strict element={<Main />} />
        <Route path="/" exact element={<Main />} />
        <Route path="/properties/" exact element={<Main />} />
        <Route path="/search/:query" strict element={<MainSearch />} />
        <Route path="/create" element={<CreateProperty />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login setToken={setToken} />} />
        <Route path="/details/:id" exact element={<Details token={token} />} />
      </Routes>

      <CitySearch  />

      <WhyChooseUs />

      <Testimonials />

      <Footer />

      <Link className="scrollToHome" to="#">
        <i className="flaticon-arrows"></i>
      </Link>
    </div>
    </AuthContext.Provider >
  );
  
}

export default App;
