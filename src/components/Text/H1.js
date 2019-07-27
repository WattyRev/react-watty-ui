import React from "react";
import styled from "styled-components";
import Text from "./Text";

const StyledH1 = styled(Text)`
  font-size: 32px;
  line-height: 32px;
`;

/**
 * A styled `<h1>` element.
 * This uses `<Text>` and passes arguments there.
 * @param {Node} children The items to render inside the <h1>
 */
const H1 = props => <StyledH1 as="h1" {...props} />;

export default H1;
