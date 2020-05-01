import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr } from "../../functions/findByTestAttrFunction";
import { SearchSection } from "../Wrappers/SearchSection/SearchSection";

describe("SearchSection", () => {
  it("renders without error.", () => {
    const component = shallow(<SearchSection />);
    const section = findByTestAttr(component, "search");
    expect(section.length).toBe(1);
  });
});
