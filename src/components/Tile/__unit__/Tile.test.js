import React from "react";
import { mount } from "enzyme";
import theme from "../../../index";
import Tile from "../Tile";

describe("Tile", () => {
  it("renders", () => {
    mount(<Tile theme={theme} />);
  });
});
