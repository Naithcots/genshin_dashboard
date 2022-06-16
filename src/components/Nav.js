import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FaTimes } from "react-icons/fa";
import Container from "../styles/Container.styled";

const Links = ["Characters", "Artifacts", "Domains", "About"];

const Nav = ({ navIsOpen, setnavIsOpen }) => {
  useEffect(() => {
    navIsOpen
      ? document.body.classList.add("overflow")
      : document.body.classList.remove("overflow");
  }, [navIsOpen]);

  return (
    <StyledNav active={navIsOpen}>
      <Container>
        <NavIcons>
          <FaTimes className="times" onClick={() => setnavIsOpen(false)} />
        </NavIcons>
        <NavWrapper>
          {Links.map((link) => (
            <Link
              to={`/${link}`}
              onClick={() => setnavIsOpen(false)}
              key={link}
            >
              {link}
            </Link>
          ))}
        </NavWrapper>
      </Container>
    </StyledNav>
  );
};

export default Nav;

const NavIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.65em 0;
  font-size: 2rem;

  .times {
    cursor: pointer;
  }
`;

const NavWrapper = styled.div``;

const StyledNav = styled.nav`
  width: 100%;
  height: 0;

  position: fixed;
  top: 0;
  left: 0;
  overflow-y: hidden;

  /* opacity: 0.75; */
  z-index: 999;
  text-align: center;

  background-color: #2d2a46;

  transition: all 0.25s ease-in-out;

  ${({ active }) =>
    active &&
    css`
      height: 100%;
      /* opacity: 1; */
    `};

  a {
    display: block;
    margin: 0 1em;
    padding: 1em 0;

    color: ${({ theme }) => theme.colors.default.color};

    font-size: 1.75rem;
    text-decoration: none;
    text-transform: capitalize;

    border-bottom: 1px solid gray;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #554e83;
    }
  }
`;
