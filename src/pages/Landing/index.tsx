import React from "react";

import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import SecondaryFeaturesBox from "../../components/SecondaryFeaturesBox";

const Landing: React.FC = () => {
  return (
    <>
      <NavBar />
      <Header />
      <SecondaryFeaturesBox />
    </>
  );
};

export default Landing;
