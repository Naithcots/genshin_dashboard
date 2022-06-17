import { Link } from "react-router-dom";
import styled from "styled-components";

const CharacterCard = ({ data }) => {
  const name = data.name.toLowerCase();

  return (
    <StyledLink to={`/character/${name}`}>
      <StyledCharacterCard>
        <Name>{data.name}</Name>
      </StyledCharacterCard>
    </StyledLink>
  );
};
export default CharacterCard;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledCharacterCard = styled.div`
  background-color: rgba(128, 128, 128, 0.65);
  padding: 1em;
  height: 100%;
  border-radius: 5px;
  transition: opacity 0.25s;
  position: relative;
  overflow: hidden;

  &:hover {
    opacity: 0.8;
  }
`;

const Name = styled.h3`
  letter-spacing: 0.4px;
  font-weight: 300;
  margin: 0;
  margin-top: 1rem;
  font-size: 1.25rem;
  text-transform: capitalize;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
