import Header from "./components/Header";
import Footer from "./components/Footer";
import OurPartners from "./components/OurPartners";
import HomeSearch from "./components/HomeSearch";
import Main from "./components/Main";
import MainSearch from "./components/MainSearch";
import CitySearch from "./components/CitySearch";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import SignUpModal from "./components/SignUpModal";
import CreateProperty from "./components/CreateProperty";
import Register from "./components/Register";
import Login from "./components/Login";
import Details from "./components/Details";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <div className="preloader"></div>

      <Header />

      <SignUpModal />

      <HomeSearch />
      

      <Routes>
        <Route path="/home" exact element={<Main />} />
        <Route path="/" exact element={<Main />} />
        <Route path="/properties/" exact element={<Main />} />
        <Route path="/home/search" exact element={<MainSearch />} />
        <Route path="/create" element={<CreateProperty />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/details/:id" exact element={<Details />} />
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
