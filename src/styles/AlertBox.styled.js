import styled, { css, keyframes } from "styled-components";
import Container from "./Container.styled";

const shake = keyframes`
  25% {
    transform: rotateZ(3deg);
  }
  35% {
    transform: rotateZ(-3deg);
  }
  55% {
    transform: rotateZ(0);
  }
  65% {
    transform: rotateZ(-3deg);
  }
  75% {
    transform: rotateZ(3deg);
  }
  100% {
    transform: rotateZ(0);
  }
`;

const StyledAlertBox = styled.div`
  margin: 1em 0;
  padding: 0.25rem 1rem;
  border-radius: 10px;
  background-color: #cc232395;
  text-align: center;

  ${(props) =>
    props.animation === "shake" &&
    css`
      animation: ${shake} 500ms;
    `}

  p {
    color: white;
  }
`;

const AlertBox = (props) => (
  <Container>
    <StyledAlertBox {...props}>{props.children}</StyledAlertBox>
  </Container>
);

export default AlertBox;
