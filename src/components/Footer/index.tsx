import React from "react";

import logoImg from "../../assets/img/logo.svg";
import { ReactComponent as FacebookImg } from "../../assets/img/facebook.svg";
import { ReactComponent as TwitterImg } from "../../assets/img/twitter.svg";
import { ReactComponent as InstagramImg } from "../../assets/img/instagram.svg";

import {
  Container,
  Content,
  AboutLoocal,
  SocialMediaContainer,
  SocialMedia,
  NavLinks,
  Column,
} from "./styles";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <AboutLoocal>
          <img src={logoImg} alt="Logo" />
          <span>2020 - Santos/SP</span>
          <SocialMediaContainer>
            <SocialMedia to="/">
              <FacebookImg />
            </SocialMedia>
            <SocialMedia to="/">
              <TwitterImg />
            </SocialMedia>
            <SocialMedia to="/">
              <InstagramImg />
            </SocialMedia>
          </SocialMediaContainer>
        </AboutLoocal>
        <NavLinks>
          <Column>
            <strong>Sistema Loocal</strong>
            <Link to="/">
              <li>Guia rápido</li>
            </Link>
            <Link to="/">
              <li>FAQ</li>
            </Link>
            <Link to="/">
              <li>Tutoriais</li>
            </Link>
            <Link to="/">
              <li>Política de privacidade</li>
            </Link>
            <Link to="/">
              <li>Termos de serviço</li>
            </Link>
          </Column>
          <Column>
            <strong>Para entregadores</strong>
            <Link to="/">
              <li>Aplicativo móvel</li>
            </Link>
            <Link to="/">
              <li>FAQ</li>
            </Link>
            <Link to="/">
              <li>Tutoriais</li>
            </Link>
            <Link to="/">
              <li>Política de privacidade</li>
            </Link>
            <Link to="/">
              <li>Termos de serviço</li>
            </Link>
          </Column>
          <Column>
            <strong>Sobre</strong>
            <Link to="/">
              <li>Equipe</li>
            </Link>
            <Link to="/">
              <li>Novidades</li>
            </Link>
          </Column>
        </NavLinks>
      </Content>
    </Container>
  );
};

export default Footer;
