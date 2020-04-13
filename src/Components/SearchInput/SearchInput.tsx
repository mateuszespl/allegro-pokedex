import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { searchInputChange } from "./../../store/actionsCreator";

const StyledWrapper = styled.label`
  width: 100%;
  input {
    width: 100%;
    height: 45px;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    padding: 10px 15px;
    border-radius: 25px 0 0 25px;
    border-right: none;
    font-size: ${({ theme }) => theme.fonts.m};
    outline: none;
  }
`;

export interface SearchInputInterface {
  searchInputValue: string;
  handleChange: () => any;
}

const SearchInput: React.FC<SearchInputInterface> = ({
  searchInputValue,
  handleChange,
}) => {
  return (
    <StyledWrapper className="search__input">
      <input
        type="text"
        onChange={handleChange}
        value={searchInputValue}
        placeholder="Wpisz nazwę pokemona."
      />
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    searchInputValue: state.searchInputValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => dispatch(searchInputChange(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
