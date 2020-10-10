import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 992px) {
    padding: 5% 0 0 0;
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
  margin-top: 15px;
  margin-bottom: 15px;

  @media (min-width: 992px) {
    text-align: unset;
  }
`;

export const Features = styled.div`
  > div {
    margin-top: 15px;
  }
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;

  > img {
    margin-right: 12px;
  }
`;
