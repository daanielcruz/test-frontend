import React from "react";

import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import SecondaryFeaturesBox from "../../components/SecondaryFeaturesBox";
import MainFeaturesSection from "../../components/MainFeaturesSection";

const Landing: React.FC = () => {
  return (
    <>
      <NavBar />
      <Header />
      <SecondaryFeaturesBox />
      <MainFeaturesSection />
    </>
  );
};

export default Landing;
