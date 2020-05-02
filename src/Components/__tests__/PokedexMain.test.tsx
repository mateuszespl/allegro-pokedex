import { shallow } from "enzyme";
import { PokedexMain } from "../PokedexMain";
import React from "react";
import { findByTestAttr } from "../../functions/findByTestAttrFunction";

describe("<PokedexMain/>", () => {
  it("renders without error.", () => {
    const component = shallow(<PokedexMain pokemonDataList={[]} />);
    const main = findByTestAttr(component, "main");
    expect(main.length).toBe(1);
  });
});
