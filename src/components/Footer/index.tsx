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
            <li>
              <strong>Sistema Loocal</strong>
            </li>
            <li>
              <Link to="/">Guia rápido</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Tutoriais</Link>
            </li>
            <li>
              <Link to="/">Política de privacidade</Link>
            </li>
            <li>
              <Link to="/">Termos de serviço</Link>
            </li>
          </Column>
          <Column>
            <li>
              <strong>Para entregadores</strong>
            </li>
            <li>
              <Link to="/">Aplicativo móvel</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Tutoriais</Link>
            </li>
            <li>
              <Link to="/">Política de privacidade</Link>
            </li>
            <li>
              <Link to="/">Termos de serviço</Link>
            </li>
          </Column>
          <Column>
            <li>
              <strong>Sobre</strong>
            </li>
            <li>
              <Link to="/">Equipe</Link>
            </li>
            <li>
              <Link to="/">Novidades</Link>
            </li>
          </Column>
        </NavLinks>
      </Content>
    </Container>
  );
};

export default Footer;
