import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TYPOGRAPHY_STYLES } from "../Text/Text";

export const SelectWrapper = styled.div`
  ${TYPOGRAPHY_STYLES};
  position: relative;

  select {
    appearance: none;
    display: block;
    background: transparent;
    width: 100%;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    box-sizing: border-box;
    outline: none;
  }
  &:after {
    content: "";
    display: block;
    border-right: 1px solid ${props => props.theme.colors.black};
    border-bottom: 1px solid ${props => props.theme.colors.black};
    transform: rotate(45deg);
    width: 8px;
    height: 8px;
    position: absolute;
    top: 5px;
    right: 8px;
  }
`;

/**
 * A style wrapper around a basic `<select>` element.
 *
 * All excess props are spread onto the `<select>`
 */
const Select = ({ ...props }) => (
  <SelectWrapper>
    <select {...props} />
  </SelectWrapper>
);

Select.propTypes = {
  children: PropTypes.node.isRequired
};

export default Select;
