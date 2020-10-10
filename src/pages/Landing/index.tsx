import React from "react";

import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import SecondaryFeaturesSection from "../../components/SecondaryFeaturesSection";
import MainFeaturesSection from "../../components/MainFeaturesSection";
import TestmonialsSection from "../../components/TestmonialsSection";
import ConvertionSection from "../../components/ConvertionSection";

const Landing: React.FC = () => {
  return (
    <>
      <NavBar />
      <Header />
      <SecondaryFeaturesSection />
      <MainFeaturesSection />
      <TestmonialsSection />
      <ConvertionSection />
    </>
  );
};

export default Landing;
