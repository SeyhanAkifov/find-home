import Header from "./components/Header";
import Footer from "./components/Footer";
import OurPartners from "./components/OurPartners";



import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import OurBlog from "./components/OurBlog";
import SignUpModal from "./components/SignUpModal";

import Create from "./components/CreateProperty";

function CreateP(site="index") {
  return (
    <div className="wrapper">
      <div className="preloader"></div>

      <Header />

      <SignUpModal />

      <Create />

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

export default CreateP;