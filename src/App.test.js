import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useState, useRef } from "react";
import MainItem from "./components/MainItem";
import NotFound  from "./components/NotFound";
import Footer  from "./components/Footer";
import CityItem  from "./components/CityItem";
import CitySearch from "./components/CitySearch";
import WhyChooseUs from "./components/WhyChooseUs";



test("Always true", () => {
  expect(true).toBe(true);
});

describe("Main Item Component", () => {
  it("should display price", () => {
    render(
      <BrowserRouter>
        <MainItem data={{ price: 30 }} />
      </BrowserRouter>
    );
    expect(document.getElementsByClassName("fp_price")[0].innerHTML).toBe("$30");
  });

  it("should display type", () => {
    render(
      <BrowserRouter>
        <MainItem data={{ propertyType: "My title" }} />
      </BrowserRouter>
    );
    expect(document.getElementsByClassName("title")[0].innerHTML).toBe("My title");
  });
});

describe("NotFound Component", () => {

  const text = "Ohh! Page Not Found";

  it("should display title", () => {
    render(
      <BrowserRouter>
        <NotFound  />
      </BrowserRouter>
    );
    expect(document.getElementsByTagName("h1")[0].innerHTML).toBe(text);
  });

  
});



describe("Footer Component", () => {

  const text = "© Seyhan Akifov  2021 Find Home.Made with love.";
  
  it("should display title", () => {
    
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(document.getElementsByTagName("p")[0].innerHTML).toBe(text);
  });

  
});

describe("CityItem Component", () => {

  const text = "Munich";
  
  it("should display title", () => {
    
    render(
      <BrowserRouter>
        <CityItem  data={{city : text}}/>
      </BrowserRouter>
    );
    expect(document.getElementsByTagName("h4")[0].innerHTML).toBe(text);
  });

  
});

describe("CitySearch Component", () => {

  const text = "Find Properties in These Cities";
  
  it("should display title", () => {
    
    render(
      <BrowserRouter>
        <CitySearch />
      </BrowserRouter>
    );
    expect(document.getElementsByTagName("div")[1].innerHTML).toBe("Loading...");
  });

  
});

describe("WhyChooseUs Component", () => {

  const text = "Why Choose Us";
  
  it("should display title", () => {
    
    render(
      <BrowserRouter>
        <WhyChooseUs />
      </BrowserRouter>
    );
    expect(document.getElementsByTagName("h2")[0].innerHTML).toBe(text);
  });

  
});




