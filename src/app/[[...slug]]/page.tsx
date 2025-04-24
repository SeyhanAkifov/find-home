import CitySearch from "../../components/CitySearch";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeSearch from "../../components/HomeSearch";
import WhyChooseUs from "../../components/WhyChooseUs";
import { ClientOnly } from "./client";

export function generateStaticParams() {
  return [
    { slug: ["home"] },
    { slug: ["details", "5"] }, // Example dynamic route
    { slug: ["login"] },
    { slug: ["register"] },
    { slug: ["myproperties"] },
  ];
}

export default async function Page({ params }: { params: { slug?: string[] } }) {
  const slug = params?.slug || ["home"];

  // Ensure params are properly awaited before use
  return <ClientOnly component={slug[0] === "details" ? "details" : "main"} />

  

    
  };