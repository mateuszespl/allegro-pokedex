import { shallow } from "enzyme";
import React from "react";
import DisplaySection from "../Wrappers/DisplaySection/DisplaySection";
import { findByTestAttr } from "../../functions/findByTestAttrFunction";

describe("<DisplaySection/>", () => {
  it("renders without error.", () => {
    const component = shallow(<DisplaySection />);
    const section = findByTestAttr(component, "display");
    expect(section.length).toBe(1);
  });
});
