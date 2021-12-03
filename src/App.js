import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSearch from "./components/HomeSearch";
import Main from "./components/Main";
import MainSearch from "./components/MainSearch";
import MyProperties from "./components/MyProperties";
import CitySearch from "./components/CitySearch";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CreateProperty from "./components/CreateProperty";
import EditProperty from "./components/EditProperty";
import Register from "./components/Register";
import Login from "./components/Login";
import Details from "./components/Details";
import { Route, Routes, Link } from "react-router-dom";
import AuthContext from './contexts/AuthContext'
import React, { useState } from 'react';
import { useEffect } from "react/cjs/react.development";
import {login, getUser} from "./services/authServices";

function App() {
  const [userInfo, setUserInfo] = useState({isAuthenticated : false, email : null, token : null})
  const [token, setToken] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();

  console.log(token);

  useEffect(() => {

    let userData = getUser();
    console.log(userData);

    
  }, [userInfo])
    
    return (
      <AuthContext.Provider value={userInfo}>
    <div className="wrapper">
      <div className="preloader"></div>

      <Header  setUserInfo={setUserInfo}/>
      
      <HomeSearch />
      
      <Routes>
        <Route path="/home" strict element={<Main />} />
        <Route path="/" strict element={<Main />} />
        <Route path="/properties/" exact element={<Main />} />
        <Route path="/search/:query" strict element={<MainSearch />} />
        <Route path="/create" element={<CreateProperty />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login  setUserInfo={setUserInfo}  />} />
        <Route path="/details/:id" strict element={<Details />} />
        <Route path="/myProperties" exact element={<MyProperties />} />
        <Route path="/edit/:id" exact element={<EditProperty />} />
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
