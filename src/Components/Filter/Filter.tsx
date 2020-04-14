import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  setWeightValue,
  setHeightValue,
  setTypeValue,
  setCurrentFilters,
} from "../../store/actionsCreator";

const StyledWrapper = styled.li<{
  filterVisible: boolean;
  filterApplied: boolean;
}>`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 15px;
  list-style: none;
  width: 120px;
  position: relative;
  height: ${({ filterVisible }) => (filterVisible ? "100%" : "30px")};
  outline: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 100;
  background: ${({ theme }) => theme.colors.darkWhite};

  .filter {
    &__switch {
      padding: 0 0 0 5px;
      width: 100%;
      height: 30px;
      outline: none;
      position: absolute;
      border: none;
      opacity: ${({ filterApplied }) => (filterApplied ? "50%" : "100%")};
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-around;
      font-weight: 400;
      align-items: center;
      font-size: ${({ theme }) => theme.fonts.s};
      background: ${({ theme }) => theme.colors.darkWhite};
      color: ${({ theme }) => theme.colors.darkGrey};
      cursor: ${({ filterApplied }) => (filterApplied ? "unset" : "pointer")};

      svg {
        margin: 0 3px;
        font-size: ${({ theme }) => theme.fonts.m};
        transform: ${({ filterVisible }) =>
          filterVisible ? "rotate(180deg)" : "rotate(0deg)"};
      }
    }

    &__box {
      position: relative;
      margin: 30px 0 0 0;
      display: flex;
      flex-direction: column;

      label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          font-size: ${({ theme }) => theme.fonts.xs};
        }

        input,
        select {
          outline: none;
          width: 100%;
          margin: 5px 0 10px;
        }
      }
    }

    &__button {
      background: ${({ theme }) => theme.colors.darkGrey};
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fonts.xs};
      border: none;
      height: 20px;
      border-radius: 10px;
      cursor: pointer;
      outline: none;
    }
  }
`;

export interface FilterInterface {
  filter: string;
  weightValue: number;
  setWeightValue: () => any;
  heightValue: number;
  setHeightValue: () => any;
  typeValue: number;
  setTypeValue: () => any;
  setFilters: (e: React.FormEvent<HTMLInputElement>) => any;
}

const Filter: React.FC<FilterInterface> = ({
  filter,
  weightValue,
  setWeightValue,
  heightValue,
  setHeightValue,
  typeValue,
  setTypeValue,
  setFilters,
}) => {
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const [filterApplied, setFilterApplied] = useState<boolean>(false);

  const handleClick = (e) => {
    e.preventDefault();
    setFilters(e);
    setFilterVisible(!filterVisible);
    setFilterApplied(!filterApplied);
  };
  return (
    <StyledWrapper
      filterApplied={filterApplied}
      filterVisible={filterVisible}
      className="filter"
    >
      <button
        disabled={filterApplied}
        onClick={() => setFilterVisible(!filterVisible)}
        className="filter__switch"
      >
        {filter}
        <MdKeyboardArrowDown />
      </button>
      <div className="filter__box">
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
              onChange={setWeightValue}
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
              onChange={setHeightValue}
            />
          </label>
        )}
        {filter === "Typ" && (
          <label>
            <select value={typeValue} onChange={setTypeValue}>
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
        <button value={filter} onClick={handleClick} className="filter__button">
          Zastosuj filtr
        </button>
      </div>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    typeValue: state.typeValue,
    weightValue: state.weightValue,
    heightValue: state.heightValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setWeightValue: (e) => dispatch(setWeightValue(e)),
    setHeightValue: (e) => dispatch(setHeightValue(e)),
    setTypeValue: (e) => dispatch(setTypeValue(e)),
    setFilters: (e) => dispatch(setCurrentFilters(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
