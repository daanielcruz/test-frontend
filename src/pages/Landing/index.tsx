import React from "react";

import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import SecondaryFeaturesSection from "../../components/SecondaryFeaturesSection";
import MainFeaturesSection from "../../components/MainFeaturesSection";
import TestmonialsSection from "../../components/TestmonialsSection";

const Landing: React.FC = () => {
  return (
    <>
      <NavBar />
      <Header />
      <SecondaryFeaturesSection />
      <MainFeaturesSection />
      <TestmonialsSection />
    </>
  );
};

export default Landing;
