import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background-secondary);
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
