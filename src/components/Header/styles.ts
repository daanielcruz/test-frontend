import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 992px) {
    padding: 5% 0 0 0;
    align-items: flex-end;
    flex-direction: row;
    width: 880px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const Presentation = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    width: 50%;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 24px;

  > span {
    font-size: 24px;
  }

  @media (min-width: 992px) {
    text-align: unset;
    font-weight: 500;
    font-size: 35px;
    line-height: 55px;

    > span {
      font-size: 35px;
    }
  }

  @media (min-width: 1200px) {
    font-size: 50px;
    line-height: 70px;
    > span {
      font-size: 50px;
    }
  }
`;

export const Slogan = styled.span`
  text-align: center;
  line-height: 30px;
  margin-top: 20px;
  color: var(--color-text-secondary);

  @media (min-width: 992px) {
    text-align: unset;
  }
`;

export const PresentationButton = styled(Link)`
  margin-top: 25px;
  width: 200px;
  height: 50px;
  background: var(--color-primary);
  border-radius: 10px;
  color: var(--color-text-in-button);
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  line-height: 25px;
  box-shadow: 0 10px 54px rgba(0, 165, 54, 0.35);
  text-decoration: none;
  transition: 0.5s;

  @media (min-width: 992px) {
    width: 250px;
    height: 60px;
    font-size: 16px;
    margin-top: 40px;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  @media (min-width: 992px) {
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: -10px;
  }
`;

export const PresentationImg = styled.img`
  width: 95%;
`;
