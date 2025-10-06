import React from "react";
import Header from "../general/Header";
import BannerArea from "../general/BannerArea";
import Footer from "../general/Footer";
import MainContent from "./MainContent";

function Page404() {
  return (
    <>
      <BannerArea
        title="Company"
        subtitle="Not Found"
        Intro="The page you are looking for does not exist."
      />
      <MainContent />
    </>
  );
}

export default Page404;
