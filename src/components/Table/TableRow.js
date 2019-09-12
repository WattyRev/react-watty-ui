import styled from "styled-components";

/**
 * A styled `<tr>` element. Passes all props directly to the `<tr>` element.
 */
const TableRow = styled.tr`
  border-bottom: 1px solid ${props => props.theme.colors.gray};

  &:nth-child(even) {
    background-color: ${props => props.theme.colors.silver};
  }
`;

/** @component */
export default TableRow;
