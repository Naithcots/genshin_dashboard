import styled from "styled-components";
import Container from "./Container.styled";

const StyledAlertBox = styled.div`
  margin: 1em 0;
  padding: 0.25rem 1rem;
  border-radius: 10px;
  background-color: #cc232395;
  text-align: center;

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
