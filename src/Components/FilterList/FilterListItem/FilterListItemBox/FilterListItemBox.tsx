import React from "react";

import { StyledFilterListItemBox } from "./FilterListItemBox.styled";

type filtersValueType = {
  type: string;
  weight: number;
  height: number;
};

interface FilterListItemBoxInterface {
  handleChange: (filters: {
    type: string;
    weight: number;
    height: number;
  }) => void;
  filtersValue: filtersValueType;
  filter: string;
}

export const FilterListItemBox: React.FC<FilterListItemBoxInterface> = ({
  filter,
  filtersValue,
  handleChange,
}) => {
  const {
    weight: weightValue,
    height: heightValue,
    type: typeValue,
  } = filtersValue;
  return (
    <StyledFilterListItemBox className="filter__box" data-test="filterBox">
      {filter === "Waga" && (
        <label>
          <span>
            Mniej niż: <strong>{weightValue}</strong>kg
          </span>
          <input
            type="range"
            min="0"
            step="1"
            max="1000"
            value={weightValue}
            onChange={() => handleChange({ weight: 1, height: 1, type: "a" })}
          />
        </label>
      )}
      {filter === "Wzrost" && (
        <label>
          <span>
            Mniej niż: <strong>{heightValue}</strong>m
          </span>
          <input
            type="range"
            min="0"
            step="0.1"
            max="14.5"
            value={heightValue}
            onChange={() => handleChange({ weight: 1, height: 1, type: "a" })}
          />
        </label>
      )}
      {filter === "Typ" && (
        <label>
          <select
            value={typeValue}
            onChange={() => handleChange({ weight: 1, height: 1, type: "a" })}
          >
            <option value="water">Water</option>
            <option value="poison">Poison</option>
            <option value="grass">Grass</option>
            <option value="fire">Fire</option>
            <option value="bug">Bug</option>
            <option value="flying">Flying</option>
            <option value="normal">Normal</option>
            <option value="electric">Electric</option>
            <option value="ground">Ground</option>
            <option value="fairy">Fairy</option>
            <option value="fighting">Fighting</option>
            <option value="psychic">Psychic</option>
            <option value="rock">Rock</option>
            <option value="steel">Steel</option>
            <option value="ghost">Ghost</option>
            <option value="ice">Ice</option>
            <option value="dark">Dark</option>
            <option value="dragon">Dragon</option>
          </select>
        </label>
      )}
    </StyledFilterListItemBox>
  );
};
