"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import CitySearch from "../components/CitySearch";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeSearch from "../components/HomeSearch";
import WhyChooseUs from "../components/WhyChooseUs";
import { AuthProvider } from "../contexts/AuthContext";

interface UserInfo {
  isAuthenticated: boolean;
  email: string | null;
  token: string | null;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    isAuthenticated: false,
    email: null,
    token: null,
  });

  useEffect(() => {
    // Initialize user info on the client
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    setUserInfo({
      isAuthenticated: !!token,
      email,
      token,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <title>React App</title>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body>
        <AuthProvider>
          <Header />
          <HomeSearch />
          {children}
          <CitySearch />
          <WhyChooseUs />
          <Footer />
        </AuthProvider>

        {/* External Scripts */}
        <Script src="/js/jquery-3.3.1.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-migrate-3.0.0.min.js" strategy="beforeInteractive" />
        <Script src="/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.mmenu.all.js" strategy="lazyOnload" />
        <Script src="/js/ace-responsive-menu.js" strategy="lazyOnload" />
        <Script src="/js/bootstrap-select.min.js" strategy="lazyOnload" />
        <Script src="/js/isotop.js" strategy="lazyOnload" />
        <Script src="/js/snackbar.min.js" strategy="lazyOnload" />
        <Script src="/js/simplebar.js" strategy="lazyOnload" />
        <Script src="/js/parallax.js" strategy="lazyOnload" />
        <Script src="/js/scrollto.js" strategy="lazyOnload" />
        <Script src="/js/jquery-scrolltofixed-min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.counterup.js" strategy="lazyOnload" />
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/js/slider.js" strategy="lazyOnload" />
        <Script src="/js/pricing-slider.js" strategy="lazyOnload" />
        <Script src="/js/timepicker.js" strategy="lazyOnload" />
        <Script src="/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}