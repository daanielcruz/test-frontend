import React from "react";

import presentationImg from "../../assets/img/illustration-header.svg";

import {
  Container,
  Content,
  Presentation,
  ImgContainer,
  Title,
  Slogan,
  PresentationButton,
  PresentationImg,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Presentation>
          <Title>
            Solicite entregadores de forma eficiente{" "}
            <span role="img" aria-label="Moto">
              &#128757;
            </span>
          </Title>
          <Slogan>
            Somos a solução que o seu comércio precisa pra lidar com entregas de
            forma prática e objetiva.
          </Slogan>
          <PresentationButton to="/">Entre em Contato</PresentationButton>
        </Presentation>
        <ImgContainer>
          <PresentationImg src={presentationImg} alt="Imagem de Apresentação" />
        </ImgContainer>
      </Content>
    </Container>
  );
};

export default Header;
