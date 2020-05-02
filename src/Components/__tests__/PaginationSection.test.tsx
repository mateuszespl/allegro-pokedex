import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr } from "../../functions/findByTestAttrFunction";
import { PaginationSection } from "../Wrappers/PaginationSection/PaginationSection";

describe("<PaginationSection/>", () => {
  it("renders without error.", () => {
    const component = shallow(<PaginationSection displayMode="" />);
    const section = findByTestAttr(component, "pagination");
    expect(section.length).toBe(1);
  });
});
