import React from "react";
// import DownloadApp from "../components/DownloadApp";
import FeaturedOpp from "../components2/FeaturedOpp";
import GetHired from "../components2/GetHired";
import HomeHero from "../components2/HomeHero";
import LPM from "../components2/LPM";
import Opportunities from "../components2/Opportunities";
import OurNumbers from "../components2/OurNumbers";
import Showcase from "../components2/Showcase";
// import SlidingBrands from "../components2/SlidingBrands";

const Home2 = () => {
  return (
    <>
      <HomeHero />
      {/* <SlidingBrands
        small={"Industry veterans"}
        title={"trust us:"}
      /> */}
      <Showcase type={"home"} />
      <LPM />
      <Opportunities />
      <GetHired />
      <FeaturedOpp type={"home"} />
      <OurNumbers />
      {/* <DownloadApp /> */}
    </>
  );
};

export default Home2;
