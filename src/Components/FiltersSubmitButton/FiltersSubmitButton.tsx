import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  filterPokemonList,
  displayModeUpdate,
  clearFilters,
} from "../../store/actionsCreator";

const StyledWrapper = styled.button<{
  currentFilters: Array<any>;
  filterApplied: boolean;
}>`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 15px;
  list-style: none;
  width: 120px;
  position: relative;
  height: 30px;
  opacity: ${({ currentFilters }) =>
    currentFilters.length === 0 ? "50%" : "100%"};
  outline: none;
  font-size: ${({ theme }) => theme.fonts.s};
  background: ${({ theme, filterApplied }) =>
    !filterApplied ? theme.colors.green : theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  cursor: ${({ currentFilters }) =>
    currentFilters.length === 0 ? "unset" : "pointer"};

  &:disabled,
  [disabled] {
    cursor: not-allowed;
  }
`;

export interface FiltersSubmitButtonInterface {
  currentFilters: Array<any>;
  filterPokemonList: (
    pokemonDataList: Array<any>,
    currentFilters: Array<any>
  ) => any;
  pokemonDataList: Array<any>;
  displayModeUpdate: (mode: string) => any;
  displayMode: string;
  clearFilters: () => any;
}

export const FiltersSubmitButton: React.FC<FiltersSubmitButtonInterface> = ({
  currentFilters,
  filterPokemonList,
  pokemonDataList,
  displayModeUpdate,
  displayMode,
  clearFilters,
}) => {
  const [filterApplied, setFilterApplied] = useState<boolean>(false);
  const handleClick = (e) => {
    e.preventDefault();
    setFilterApplied(!filterApplied);
    filterPokemonList(pokemonDataList, currentFilters);
    if (displayMode === "Filter") {
      displayModeUpdate("Unset");
      clearFilters();
    } else {
      displayModeUpdate("Filter");
    }
  };

  useEffect(() => {
    if (currentFilters.length === 0) {
      setFilterApplied(false);
    }
  }, [currentFilters.length]);
  return (
    <StyledWrapper
      className="filters__submit"
      onClick={handleClick}
      data-test="filtersSubmitButton"
      filterApplied={filterApplied}
      currentFilters={currentFilters}
      disabled={currentFilters.length === 0 ? true : false}
    >
      {!filterApplied ? "Filtruj" : "Resetuj filtry"}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    displayMode: state.displayMode,
    currentFilters: state.currentFilters,
    pokemonDataList: state.pokemonDataList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterPokemonList: (pokemonDataList, filters) =>
      dispatch(filterPokemonList(pokemonDataList, filters)),
    displayModeUpdate: (mode) => dispatch(displayModeUpdate(mode)),
    clearFilters: () => dispatch(clearFilters()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersSubmitButton);
