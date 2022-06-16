import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import Container from "../styles/Container.styled";
import Nav from "./Nav";

const Header = () => {
  const [navIsOpen, setnavIsOpen] = useState(false);

  return (
    <>
      <StyledHeader>
        <ContainerHeader>
          <Link to="/">
            <h2>genshin-dashboard</h2>
          </Link>
          <FaBars className="bars" onClick={() => setnavIsOpen(!navIsOpen)} />
        </ContainerHeader>
      </StyledHeader>
      <Nav navIsOpen={navIsOpen} setnavIsOpen={setnavIsOpen} />
    </>
  );
};

export default Header;

const ContainerHeader = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .bars {
    font-size: 1.5em;
    cursor: pointer;
  }
`;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 900;
  background-color: ${({ theme }) => theme.colors.default.background + "95"};

  a {
    text-decoration: none;
  }

  h2 {
    font-size: 1.25rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
