import React from "react";

import featuresImg from "../../assets/img/illustration-features.svg";
import checkedCircle from "../../assets/img/checked.svg";

import {
  Container,
  Content,
  ImgContainer,
  Presentation,
  PresentationImg,
  Slogan,
  Title,
  Features,
  Feature,
} from "./styles";

const MainFeaturesSection: React.FC = () => {
  return (
    <Container>
      <Content>
        <ImgContainer>
          <PresentationImg src={featuresImg} alt="Imagem de Apresentação" />
        </ImgContainer>
        <Presentation>
          <Title>Gerencie as entregas do seu comércio</Title>
          <Slogan>
            Com a Loocal você possui total controle sobre suas entregas.
          </Slogan>
          <Features>
            <Feature animateIn="fadeIn" duration={0.8}>
              <img src={checkedCircle} alt="Checado" />
              <span>Insira créditos na plataforma de modo pré-pago</span>
            </Feature>
            <Feature animateIn="fadeIn" duration={0.8} delay={300}>
              <img src={checkedCircle} alt="Checado" />
              <span>Entregadores segmentados por região</span>
            </Feature>
            <Feature animateIn="fadeIn" duration={0.8} delay={600}>
              <img src={checkedCircle} alt="Checado" />
              <span>Dashboard completa com métricas sobre vendas</span>
            </Feature>
            <Feature animateIn="fadeIn" duration={0.8} delay={800}>
              <img src={checkedCircle} alt="Checado" />
              <span>Acompanhamento em tempo real do seu pedido</span>
            </Feature>
          </Features>
        </Presentation>
      </Content>
    </Container>
  );
};

export default MainFeaturesSection;
