import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/img/logo.svg";

import { Container, Content, NavLinks, Burger } from "./styles";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  return (
    <Container>
      <Content>
        <Burger open={open} onClick={handleOpenMenu}>
          <div />
          <div />
          <div />
        </Burger>
        <Link to="/">
          <img src={logoImg} alt="Logo" />
        </Link>
        <NavLinks open={open}>
          <li>
            <Link to="/">Sobre</Link>
          </li>
          <li>
            <Link to="/">Testemunhos</Link>
          </li>
          <li>
            <Link to="/">Área do comerciante</Link>
          </li>
        </NavLinks>
      </Content>
    </Container>
  );
};

export default NavBar;
