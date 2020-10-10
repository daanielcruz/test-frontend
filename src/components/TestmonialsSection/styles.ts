import styled from "styled-components";

export const Container = styled.section``;

export const CenterContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 992px) {
    padding: 5% 0 0 0;
    width: 880px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
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
    font-weight: 500;
    font-size: 35px;
    max-width: 650px;

    > span {
      font-size: 35px;
      line-height: 55px;
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
  margin-bottom: 30px;
  max-width: 750px;
  color: var(--color-text-secondary);
`;

export const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 180px;

  @media (min-width: 992px) {
    height: 400px;
  }
`;

export const Loading = styled.div`
  border: 8px solid rgba(38, 38, 38, 0.1);
  border-top: 8px solid var(--color-primary);
  border-radius: 50%;
  width: 4em;
  height: 4em;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const TestmonialsContainer = styled.div`
  padding-left: 10%;
`;

export const TestmonialsWrapper = styled.div``;

export const Testmonial = styled.div`
  padding: 15px;
  border: 2px solid #dddddd;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 180px;
  border-radius: 10px;

  @media (min-width: 992px) {
    padding: 30px;
    width: 400px;
    height: 230px;
  }
`;

export const TestmonialTopItems = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

export const TestmonialPeopleImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  border-radius: 50%;

  @media (min-width: 992px) {
    width: 50px;
    height: 50px;
    margin-right: 17px;
  }
`;

export const TestmonialPeopleInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > strong {
    font-size: 16px;
    line-height: 28px;
    font-weight: bold;
  }

  > small {
    font-size: 12px;
    color: var(--color-text-secondary);
  }

  @media (min-width: 992px) {
    > strong {
      font-size: 18px;
      line-height: 30px;
    }

    > small {
      font-size: 14px;
    }
  }
`;

export const TestmonialRate = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;

  > img {
    margin-left: 11px;
  }

  @media (min-width: 992px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

export const TestmonialText = styled.div`
  line-height: 28px;
  font-size: 14px;

  @media (min-width: 992px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

export const SwiperControlButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10% 8%;

  > svg:first-child {
    margin-right: 15px;
  }

  > svg {
    width: 45px;
    height: 45px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (min-width: 992px) {
    margin: 80px 120px;

    > svg:first-child {
      margin-right: 25px;
    }

    > svg {
      width: 60px;
      height: 60px;
    }
  }
`;
