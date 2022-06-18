import styled, { keyframes } from "styled-components";
import useCharacterPortrait from "../hooks/useCharacterPortrait";

const Background = () => {
  const { src } = useCharacterPortrait();

  return src && <StyledBackground src={src} alt="background" />;
};
export default Background;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 0.15;
    }
`;

const StyledBackground = styled.img`
  width: 80%;

  position: fixed;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -999;

  animation: ${fadeIn} 500ms forwards;
`;
