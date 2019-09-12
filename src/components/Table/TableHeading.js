import styled from "styled-components";
import { TYPOGRAPHY_STYLES } from "../Text/Text";

/**
 * A styled `<th>` element. Passes all props directly to the `<th>` element.
 */
const TableHeading = styled.th`
  ${TYPOGRAPHY_STYLES};
  padding: 4px;
`;

/** @component */
export default TableHeading;
