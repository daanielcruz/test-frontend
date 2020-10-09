import styled from "styled-components";

export const Container = styled.nav`
  padding: 5% 8%;
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;

  > a {
    > img {
      width: 100px;
      height: 38.5px;
    }
  }

  @media (min-width: 992px) {
    padding: 44px;
    justify-content: space-around;
    > a {
      > img {
        width: 122px;
        height: 47px;
      }
    }
  }
`;

export const NavLinks = styled.ul`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  flex-direction: column;
  transform: ${({ open }: { open: boolean }) =>
    open ? "translateX(0)" : "translateX(-100%)"};
  background: #d7d7d7;
  width: 100%;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  justify-content: center;
  > li {
    list-style: none;
    padding-bottom: 10%;
    > a {
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  @media (min-width: 992px) {
    position: relative;
    background: unset;
    flex-direction: unset;
    transform: unset;
    transition: unset;
    width: unset;
    height: unset;

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
