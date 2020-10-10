import React from "react";

import userCircle from "../../assets/img/user-circle.svg";
import locationCircle from "../../assets/img/location-circle.svg";
import serverCircle from "../../assets/img/server-circle.svg";

import {
  Container,
  Content,
  Feature,
  FeatureImg,
  FeatureTextContainer,
  Divider,
} from "./styles";

const SecondaryFeaturesSection: React.FC = () => {
  return (
    <Container>
      <Content>
        <Feature animateIn="fadeInLeft" duration={1}>
          <FeatureImg src={userCircle} />
          <FeatureTextContainer>
            <strong>900+</strong>
            <span>Entregadores</span>
          </FeatureTextContainer>
        </Feature>
        <Divider />
        <Feature animateIn="fadeIn" duration={1} delay={500}>
          <FeatureImg src={locationCircle} />
          <FeatureTextContainer>
            <strong>300+</strong>
            <span>Comerciantes</span>
          </FeatureTextContainer>
        </Feature>
        <Divider />
        <Feature animateIn="fadeInRight" duration={1}>
          <FeatureImg src={serverCircle} />
          <FeatureTextContainer>
            <strong>+70%</strong>
            <span>Conversão</span>
          </FeatureTextContainer>
        </Feature>
      </Content>
    </Container>
  );
};

export default SecondaryFeaturesSection;
