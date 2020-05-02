import React from "react";
import { shallow } from "enzyme";
import { FiltersSubmitButton } from "../FiltersSubmitButton/FiltersSubmitButton";
import { findByTestAttr } from "../../functions/findByTestAttrFunction";

describe("<FiltersSubmitButton/>", () => {
  it("renders without error.", () => {
    const component = shallow(
      <FiltersSubmitButton
        currentFilters={[]}
        filterPokemonList={() => {}}
        pokemonDataList={[]}
        displayModeUpdate={(mode = "") => {}}
        displayMode=""
        clearFilters={() => {}}
      />
    );
    const button = findByTestAttr(component, "filtersSubmitButton");
    expect(button.length).toBe(1);
  });
});
