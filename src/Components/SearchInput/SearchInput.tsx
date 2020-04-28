import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  searchInputChange,
  updateAutocompleteList,
} from "./../../store/actionsCreator";
import AutocompleteList from "../AutocompleteList/AutocompleteList";

const StyledWrapper = styled.label<{ autocompleteList: Array<any> }>`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    height: 45px;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    padding: 10px 15px;
    border-radius: 25px 0 0 25px;
    border-right: none;
    font-size: ${({ theme }) => theme.fonts.m};
    outline: none;
    background: ${({ theme }) => theme.colors.white};
    -webkit-appearance: none;

    :disabled {
      background: ${({ theme }) => theme.colors.white};
      opacity: 100%;
    }
  }
`;

export interface SearchInputInterface {
  searchInputValue: string;
  handleChange: () => any;
  updateAutocompleteList: () => any;
  autocompleteList: Array<any>;
  filterSectionVisible: boolean;
}

const SearchInput: React.FC<SearchInputInterface> = ({
  searchInputValue,
  handleChange,
  updateAutocompleteList,
  autocompleteList,
  filterSectionVisible,
}) => {
  useEffect(() => {
    updateAutocompleteList();
  }, [searchInputValue]);
  return (
    <StyledWrapper
      autocompleteList={autocompleteList}
      className="search__input"
    >
      <input
        disabled={filterSectionVisible}
        type="text"
        onChange={handleChange}
        value={searchInputValue}
        placeholder="Wpisz nazwę pokemona."
      />
      <AutocompleteList autocompleteList={autocompleteList} />
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    autocompleteList: state.autocompleteList,
    searchInputValue: state.searchInputValue,
    filterSectionVisible: state.filterSectionVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => dispatch(searchInputChange(e)),
    updateAutocompleteList: () => dispatch(updateAutocompleteList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
