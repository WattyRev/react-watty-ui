import React from "react";
import { shallow } from "enzyme";
import bodyPortal from "../bodyPortal";

jest.mock("react-dom");

describe("bodyPortal", () => {
  it("renders", () => {
    expect.assertions(1);
    const wrapper = shallow(
      <bodyPortal>
        <div>test</div>
      </bodyPortal>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
