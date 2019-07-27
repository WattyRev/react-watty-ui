import styled from "styled-components";

/**
 * A generic container for holding content.
 */
const Tile = styled.div`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 4px;
`;

/** @component */
export default Tile;
