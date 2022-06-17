import { Link } from "react-router-dom";
import styled from "styled-components";
import useCharacterIcon from "../hooks/useCharacterIcon";

const CharacterCard = ({ data }) => {
  const name = data.name.replace(" ", "-").toLowerCase();
  const { src } = useCharacterIcon(name);

  return (
    <StyledLink to={`/character/${name}`}>
      <StyledCharacterCard>
        <Icon src={src} alt="character icon" />
        <Name>{data.name}</Name>
      </StyledCharacterCard>
    </StyledLink>
  );
};
export default CharacterCard;

const StyledLink = styled(Link)`
  color: inherit;
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

const Icon = styled.img`
  width: auto;
  max-height: 8em;
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
