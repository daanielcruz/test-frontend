import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  padding: 15px 30px;
  box-shadow: 0 90px 114px rgb(13, 16, 37, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media (min-width: 992px) {
    justify-content: space-between;
    padding: 30px 30px;
    flex-direction: row;
    padding: 30px 40px;
    width: 880px;
  }

  @media (min-width: 1200px) {
    padding: 40px 100px;
    width: 1140px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    align-items: unset;
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
    max-width: 372px;
    text-align: unset;
    font-weight: 500;
    font-size: 35px;
    line-height: 45px;

    > span {
      font-size: 35px;
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
    max-width: unset;
  }
`;

export const ConversionButton = styled(Link)`
  margin: 25px 0;
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
    margin: 0;
    &:hover {
      opacity: 0.7;
    }
  }
`;
