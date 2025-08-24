import React from "react";
import BannerCarousel from "../components/index/BannerCarousel";
import SectionAction from "../components/index/SectionAction";
import SectionFacts from "../components/index/SectionFacts";
import SectionFeature from "../components/index/SectionFeature";
import SectionProject from "../components/index/SectionProject";
import SectionService from "../components/index/SectionService";
import SectionContent from "../components/index/SectionContent";
import Sectionsubscribe from "../components/index/Sectionsubscribe";
import SectionNews from "../components/index/SectionNews";

function Home() {
  return (
    <>
      <BannerCarousel />
      <SectionAction />
      <SectionFeature />
      <SectionFacts />
      <SectionService />
      <SectionProject />
      <SectionContent />
      <Sectionsubscribe />
      <SectionNews />
    </>
  );
}

export default Home;

