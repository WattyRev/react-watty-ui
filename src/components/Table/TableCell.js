import styled from "styled-components";
import { TYPOGRAPHY_STYLES } from "../Text/Text";

/**
 * A styled `<td>` element. Passes all props directly to the `<td>` element.
 */
const TableCell = styled.td`
  ${TYPOGRAPHY_STYLES};
  padding: 4px;
`;

/** @component */
export default TableCell;
