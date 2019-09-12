import styled from "styled-components";
import { TYPOGRAPHY_STYLES } from "../Text/Text";

/**
 * A styled `<a>` element. Passes all props directly to the `<a>` element.
 */
const A = styled.a`
  ${TYPOGRAPHY_STYLES};
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;
  margin: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

/** @component */
export default A;
