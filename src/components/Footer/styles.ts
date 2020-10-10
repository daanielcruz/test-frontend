import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  background-color: var(--color-background-secondary);
  padding-bottom: 110px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 992px) {
    padding: 5% 0 0 0;
    align-items: flex-start;
    flex-direction: row;
    width: 880px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const AboutLoocal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;

  > img {
    margin-bottom: 20px;
  }

  > span {
    line-height: 30px;
    color: var(--color-text-secondary);
  }

  @media (min-width: 992px) {
    align-items: flex-start;
    padding-left: 5px;
    margin-bottom: 0;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;

  > a:not(:last-child) {
    margin-right: 20px;
  }
`;

export const SocialMedia = styled(Link)`
  margin-top: 50px;

  > svg {
    width: 33.6px;
    height: 33.6px;
    transition: 0.3s;
  }

  &:hover {
    > svg {
      width: 38px;
      height: 38px;
    }
  }

  @media (min-width: 992px) {
    margin-top: 70px;
  }
`;

export const NavLinks = styled.nav`
  display: grid;

  > ul {
    margin-bottom: 50px;
  }

  @media (min-width: 675px) {
    grid-template-columns: 1fr 1fr;
    > ul:first-child {
      margin-bottom: 50px;
      margin-right: 50px;
    }
    > ul:not(:first-child) {
      margin-bottom: 0;
    }
  }

  @media (min-width: 992px) {
    grid-template-columns: 2fr 2fr 1fr;
    > ul:first-child {
      margin-bottom: 0;
    }
    > ul:not(:last-child) {
      margin-right: 50px;
    }
  }
`;

export const Column = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > strong {
    font-size: 18px;
    line-height: 30px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  > a {
    color: var(--color-text-secondary);
    text-decoration: none;
    line-height: 30px;
    transition: 0.3s;

    > li {
      list-style: none;
      margin-top: 10px;
      color: var(--color-text-secondary);
      &:hover {
        color: var(--color-primary);
        opacity: 0.8;
      }
    }
  }

  @media (min-width: 675px) {
    &:nth-child(2) {
      align-items: flex-end;
    }
  }

  @media (min-width: 992px) {
    &:nth-child(2) {
      align-items: flex-start;
    }
  }
`;
