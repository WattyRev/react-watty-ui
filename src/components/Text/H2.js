import React from "react";
import styled from "styled-components";
import Text from "./Text";

const StyledH2 = styled(Text)`
  font-size: 24px;
  line-height: 24px;
`;

/**
 * A styled `<h2>` element.
 * This uses `<Text>` and passes arguments there.
 * @param {Node} children The items to render inside the <h2>
 */
const H2 = props => <StyledH2 as="h2" {...props} />;
export default H2;
