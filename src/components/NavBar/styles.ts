import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 5% 8% 10%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  > a {
    > img {
      width: 100px;
      height: 38.5px;
    }
  }

  @media (min-width: 992px) {
    width: 880px;
    padding: 44px 0 0 0;
    > a {
      > img {
        width: 122px;
        height: 47px;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const NavLinks = styled.ul`
  position: absolute;
  display: flex;
  align-items: flex-end;
  top: 0;
  right: 0;
  flex-direction: column;
  transform: ${({ open }: { open: boolean }) =>
    open ? "translateX(0)" : "translateX(-100%)"};
  background: #d7d7d7;
  width: 100%;
  height: 40vh;
  transition: 0.3s ease-in-out;
  padding-top: 10vh;
  box-shadow: ${({ open }: { open: boolean }) =>
    open ? "0 50px 80px rgba(0, 0, 0, 0.5)" : "none"};

  > li {
    list-style: none;
    padding: 0 5% 5% 0;
    > a {
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
    }
  }

  @media (min-width: 992px) {
    padding: 0;
    position: relative;
    background: unset;
    flex-direction: unset;
    transform: unset;
    transition: unset;
    width: unset;
    height: unset;
    box-shadow: unset;

    > li {
      padding: 0;
      list-style: none;
      > a {
        font-weight: normal;
        text-decoration: none;
        text-transform: unset;
      }
    }

    > li:not(:last-child) {
      margin-right: 70px;
      > a {
        color: var(--color-text-secondary);
        transition: 0.3s;
      }
      > a:hover {
        color: var(--color-primary);
        opacity: 0.8;
      }
    }

    > li:last-child {
      > a {
        font-weight: 500;
        padding: 12px 32px;
        border: 1px solid var(--color-primary);
        border-radius: 50px;
        color: var(--color-primary);
        transition: 0.5s;
      }
      > a:hover {
        background: var(--color-primary);
        color: var(--color-text-in-button);
      }
    }
  }
`;

export const Burger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: var(--color-text-primary);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }: { open: boolean }) =>
        open ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ open }: { open: boolean }) => (open ? "0" : "1")};
      transform: ${({ open }: { open: boolean }) =>
        open ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ open }: { open: boolean }) =>
        open ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
  @media (min-width: 992px) {
    display: none;
  }
`;
