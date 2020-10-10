import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Content = styled.div`
  box-shadow: 0 90px 114px rgb(13, 16, 37, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  @media (min-width: 992px) {
    padding: 30px 30px;
    flex-direction: row;
    margin-top: 100px;
    padding: 30px 40px;
    width: 880px;
  }

  @media (min-width: 1200px) {
    padding: 40px 100px;
    width: 1140px;
  }
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`;

export const FeatureImg = styled.img`
  margin-right: 35px;
`;

export const FeatureTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  > span {
    font-size: 17px;
  }

  @media (min-width: 1200px) {
    > strong {
      font-size: 25px;
    }

    > span {
      font-size: 20px;
    }
  }
`;

export const Divider = styled.div`
  border-bottom: 3px solid #eeeff2;
  height: 10px;
  width: 60%;

  @media (min-width: 992px) {
    border-bottom: none;
    border-right: 3px solid #eeeff2;
    margin: 0 35px;
    width: 10px;
    height: 100%;
  }
`;
