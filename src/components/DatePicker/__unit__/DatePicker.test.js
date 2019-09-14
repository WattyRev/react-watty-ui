import React from "react";
import { mount } from "enzyme";
import theme, { DatePicker } from "../../../index";

describe("DatePicker", () => {
  it("renders", () => {
    expect.assertions(1);
    const wrapper = mount(<DatePicker onChange={() => {}} theme={theme} />);
    expect(wrapper).toBeDefined();
  });
});
