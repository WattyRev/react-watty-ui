import React from "react";
import { ThemeProvider } from "styled-components";
import theme, { setupFontAwesome } from "../index";

export default class ThemeWrapper extends React.Component {
  render() {
    setupFontAwesome();
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
      </React.Fragment>
    );
  }
}
