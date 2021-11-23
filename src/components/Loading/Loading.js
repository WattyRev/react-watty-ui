import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon, Text } from "../../index";

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const StyleWrapper = styled.div`
  text-align: center;

  .spinner {
    display: inline-block;
    animation: ${animation} 1s infinite linear;
  }
`;

/**
 * A basic loading spinner
 */
const Loading = props => (
  <StyleWrapper {...props}>
    <Icon icon="spinner" className="spinner" />{" "}
    <Text as="span">Loading...</Text>
  </StyleWrapper>
);

export default Loading;
