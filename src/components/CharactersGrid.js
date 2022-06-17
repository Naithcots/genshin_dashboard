import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const CharactersGrid = ({ data }) => {
  return (
    <StyledCharactersGrid>
      {data.map((e) => (
        <CharacterCard data={e} key={e.name + e.vision} />
      ))}
    </StyledCharactersGrid>
  );
};
export default CharactersGrid;

const StyledCharactersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: space-between;
  gap: 1em;
  margin: 1.35em 0;
`;
