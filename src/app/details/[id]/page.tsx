"use client";
import { useParams } from "next/navigation";
import Details from "../../../components/Details";
import Header from "../../../components/Header";
import HomeSearch from "../../../components/HomeSearch";
import CitySearch from "../../../components/CitySearch";
import WhyChooseUs from "../../../components/WhyChooseUs";
import Footer from "../../../components/Footer";

export default function DetailsPage() {
  const params = useParams();
  const { id } = params;

  return(
    
    <>
   
      <Details />
     
    </>
    
  );
}