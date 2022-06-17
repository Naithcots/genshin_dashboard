import styled from "styled-components";
import { FaSpinner } from "react-icons/fa";
import { keyframes } from "styled-components";

const Spinner = (size) => <StyledSpinner fontSize={size} />;

export default Spinner;

const rotate = keyframes`
    from {
        transform: rotateZ(0);
    }
    to {
        transform: rotateZ(360deg)
    }
`;

const StyledSpinner = styled(FaSpinner)`
  display: block;
  margin: 1em auto;

  font-size: 2rem;
  font-size: ${(props) => props.fontSize && props.fontSize.fontSize};

  animation: ${rotate} 2500ms linear infinite;
`;
