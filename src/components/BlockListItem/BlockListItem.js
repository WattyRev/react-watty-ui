import styled from "styled-components";
import { TYPOGRAPHY_STYLES } from "../Text/Text";

/**
 * A `<div>` styled to form a horizontal list of items.
 */
const BlockListItem = styled.div`
  ${TYPOGRAPHY_STYLES};
  display: block;
  border-bottom: 1px solid
    ${props =>
    props.isLight ? props.theme.colors.grayDark : props.theme.colors.gray};
  color: ${props =>
    props.isLight ? props.theme.colors.silver : props.theme.colors.black};
  white-space: nowrap;
  padding: 8px;
  text-decoration: none;
  transition: 0.2s background;
`;

/**
 * @component
 */
export default BlockListItem;
