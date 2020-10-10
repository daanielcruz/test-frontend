import React from "react";

import {
  Container,
  Content,
  ConversionButton,
  Slogan,
  TextContainer,
  Title,
} from "./styles";

const ConvertionSection: React.FC = () => {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Title>
            Faça parte da revolução{" "}
            <span role="img" aria-label="Moto">
              &#127881;
            </span>
          </Title>
          <Slogan>Traga seu comércio para a Loocal</Slogan>
        </TextContainer>
        <ConversionButton to="/">Quero fazer parte</ConversionButton>
      </Content>
    </Container>
  );
};

export default ConvertionSection;
