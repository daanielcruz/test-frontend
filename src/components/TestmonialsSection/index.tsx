import React, { useEffect, useState } from "react";
import Swiper, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "./swiper-disabled.css";

import api from "../../services/api";

import starImg from "../../assets/img/star.svg";
import { ReactComponent as ButtonNextImg } from "../../assets/img/button-next.svg";
import { ReactComponent as ButtonPrevImg } from "../../assets/img/button-prev.svg";

import {
  Container,
  Content,
  Title,
  Slogan,
  TestmonialsContainer,
  TestmonialsWrapper,
  Testmonial,
  TestmonialTopItems,
  TestmonialPeopleImg,
  TestmonialPeopleInfo,
  TestmonialRate,
  TestmonialText,
  CenterContent,
  SwiperControlButtons,
  LoadingContainer,
  Loading,
} from "./styles";

interface Peoples {
  firstname: string;
  lastname: string;
  image: string;
  website: string;
}

const TestmonialsSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peoples, setPeoples] = useState<Peoples[]>([]);

  useEffect(() => {
    async function getDataAndStartSwiperAsync() {
      try {
        const { data: response } = await api.get("/v1/persons?_quantity=10");
        const { data } = response;
        setPeoples(data);
        setIsLoading(false);

        Swiper.use([Navigation]);
        new Swiper(".swiper-container", {
          slidesPerView: "auto",
          spaceBetween: 50,
          slidesOffsetAfter: 200,
          navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
            disabledClass: "swiper-disabled",
          },
        });
      } catch (e) {
        // Tratamento de erros aqui <3
      }
    }
    getDataAndStartSwiperAsync();
  }, []);

  return (
    <Container>
      <CenterContent>
        <Content>
          <Title>
            Utilizada por centenas de{"\n"}empreendedores{" "}
            <span role="img" aria-label="Olhos">
              &#128064;
            </span>
          </Title>
          <Slogan>
            Veja alguns depoimentos de comerciantes que utilizam a Loocal para
            gerenciar as demandas de entregas dos seus estabelecimentos
          </Slogan>
        </Content>
      </CenterContent>
      {isLoading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <TestmonialsContainer className="swiper-container">
          <TestmonialsWrapper className="swiper-wrapper">
            {peoples.map(({ firstname, lastname, image, website }) => (
              <Testmonial className="swiper-slide">
                <TestmonialTopItems>
                  <TestmonialPeopleImg src={image} alt={firstname} />
                  <TestmonialPeopleInfo>
                    <strong>{firstname + " " + lastname}</strong>
                    <small>{website}</small>
                  </TestmonialPeopleInfo>
                  <TestmonialRate>
                    4.5
                    <img src={starImg} alt="Estrela" />
                  </TestmonialRate>
                </TestmonialTopItems>
                <TestmonialText>
                  “A Loocal permitiu com que nossa panificadora reduzisse em 30%
                  os gastos com entregas, mantendo a qualidade!”
                </TestmonialText>
              </Testmonial>
            ))}
          </TestmonialsWrapper>
          <SwiperControlButtons>
            <ButtonPrevImg className="swiper-prev" />
            <ButtonNextImg className="swiper-next" />
          </SwiperControlButtons>
        </TestmonialsContainer>
      )}
    </Container>
  );
};

export default TestmonialsSection;
