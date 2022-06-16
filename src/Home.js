import styled, { css } from "styled-components";
import Container from "./styles/Container.styled";
import AlertBox from "./styles/AlertBox.styled";

const Home = () => {
  return (
    <StyledHomepage>
      <Container>
        <Box>
          <h1>Genshin Impact database website.</h1>
          <p>Genshin Impact game database based on unofficial API.</p>
        </Box>
        <AlertBox>
          <h2>Alpha Version</h2>
          <p>Please note that the website is still in early access.</p>
        </AlertBox>
      </Container>
    </StyledHomepage>
  );
};

export default Home;

const StyledHomepage = styled.main`
  text-align: center;
`;

const Box = styled.div`
  padding: 0.25rem 1rem;
  border-radius: 10px;

  ${(props) =>
    props.alert &&
    css`
      background-color: #cc232395;
    `}

  p {
    color: white;
  }
`;
