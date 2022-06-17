import { useQuery } from "react-query";
import { getCharacters } from "./queries/characters";
import styled from "styled-components";
import CharactersGrid from "./components/CharactersGrid";
import Container from "./styles/Container.styled";
import AlertBox from "./styles/AlertBox.styled";
import Spinner from "./styles/Spinner.styled";

const Characters = () => {
  const { isLoading, data } = useQuery("characters", getCharacters);
  console.log(data, isLoading);

  if (data?.error)
    return (
      <AlertBox>
        <h2>Couldn't fetch characters now.</h2>
        <p>Please try again later!</p>
      </AlertBox>
    );

  if (isLoading) return <Spinner />;

  return (
    <StyledCharacters>
      <Container>
        <h1>Character List</h1>
        <CharactersGrid data={data} />
      </Container>
    </StyledCharacters>
  );
};
export default Characters;

const StyledCharacters = styled.div`
  text-align: center;
`;
