import styled from "styled-components";
import { TYPOGRAPHY_STYLES } from "../Text/Text";

/**
 * A styled `<input>` element
 */
const Input = styled.input`
  ${TYPOGRAPHY_STYLES};
  display: block;
  width: 100%;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  box-sizing: border-box;
  outline: none;

  &[readOnly] {
    background: ${props => props.theme.colors.silver};
  }
  &:focus {
    box-shadow: 0 0 3px ${props => props.theme.colors.blue};
  }
`;

/** @component */
export default Input;
