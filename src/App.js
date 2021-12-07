import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSearch from "./components/HomeSearch";
import Main from "./components/Main";
import MainSearch from "./components/MainSearch";
import MyProperties from "./components/MyProperties";
import MyLikes from "./components/MyLikes";
import CitySearch from "./components/CitySearch";
import WhyChooseUs from "./components/WhyChooseUs";
import MobileMenu from "./components/MobileMenu";
import CreateProperty from "./components/CreateProperty";
import EditProperty from "./components/EditProperty";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Details from "./components/Details";
import { Route, Routes, Link } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import React, { useState } from "react";
import { useEffect } from "react";


function App() {
  const [userInfo, setUserInfo] = useState({
    isAuthenticated: false,
    email: null,
    token: null,
  });

  useEffect(() => {
    
  }, [userInfo]);

  return (
    <AuthContext.Provider value={userInfo}>
      <div className="wrapper">
        <div className="preloader"></div>

        <Header setUserInfo={setUserInfo} />
        <MobileMenu setUserInfo={setUserInfo} />
        <HomeSearch />
        <Routes>
          <Route path="/home" element={<>  <Main /> </>} />
          <Route path="/menu" element={ <MobileMenu /> } />
          <Route path="/" element={<>  <Main /> </>} />
          <Route path="/properties/" element={<Main />} />
          <Route path="/search/:query" element={<MainSearch />} />
          <Route path="/create" element={<CreateProperty />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/myProperties" element={<MyProperties />} />
          <Route path="/myLiked" element={<MyLikes />} />
          <Route path="/edit/:id" element={<EditProperty />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <CitySearch />

        <WhyChooseUs />

        <Footer />

        <Link className="scrollToHome" to="#">
          <i className="flaticon-arrows"></i>
        </Link>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
