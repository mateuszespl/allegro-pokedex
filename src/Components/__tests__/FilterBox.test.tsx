import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr } from "../../functions/findByTestAttrFunction";
import { FilterBox } from "../FilterBox/FilterBox";

describe("<FilterBox/>", () => {
  it("renders without error.", () => {
    const component = shallow(
      <FilterBox
        filter=""
        weightValue={0}
        setWeightValue={() => {}}
        heightValue={0}
        setHeightValue={() => {}}
        typeValue={0}
        setTypeValue={() => {}}
      />
    );
    const div = findByTestAttr(component, "filterBox");
    expect(div.length).toBe(1);
  });
});
