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
import MyComponent from "./components/Test";

function App() {
  return (
    <div className="wrapper">
      <div className="preloader"></div>

      <Header />

      <SignUpModal />

      <HomeSearch />

      <Main />

     <MyComponent />
     
      <CitySearch />

      <WhyChooseUs />

      <Testimonials />

      <OurBlog />

      <OurPartners />

      <Footer />

      <a className="scrollToHome" href="#">
        <i className="flaticon-arrows"></i>
      </a>
    </div>
  );
}

export default App;
