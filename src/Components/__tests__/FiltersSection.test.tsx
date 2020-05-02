import { shallow } from "enzyme";
import React from "react";
import { FiltersSection } from "../Wrappers/FiltersSection/FiltersSection";
import { findByTestAttr } from "../../functions/findByTestAttrFunction";

describe("<FiltersSection/>", () => {
  it("renders without error.", () => {
    const component = shallow(<FiltersSection filterSectionVisible={true} />);
    const section = findByTestAttr(component, "filters");
    expect(section.length).toBe(1);
  });
});
