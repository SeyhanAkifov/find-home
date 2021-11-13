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

function App() {
  const [state, setState] = useState("start");

  const routes = {
    "start": "Main",
    "add-property": "Create",
  };

  const navChange = (path) => {
        setState(path)
  }

  useEffect(() => {}, []);
  return (
    <div className="wrapper">
      <div className="preloader"></div>

      <Header navChange={navChange} />

      <SignUpModal />

      <HomeSearch />
      {state === "start" && <Main />}

      {state === '/add-property' && <Create />}

      <CitySearch />

      <WhyChooseUs />

      <Testimonials />

      

      <OurPartners />

      <Footer />

      <a className="scrollToHome" href="#">
        <i className="flaticon-arrows"></i>
      </a>
    </div>
  );
}

export default App;
