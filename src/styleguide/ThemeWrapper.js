import React from "react";
import { ThemeProvider } from "styled-components";
import theme, { FontAwesome } from "../index";

export default class ThemeWrapper extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FontAwesome />
        <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
      </React.Fragment>
    );
  }
}
