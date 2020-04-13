import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { fetchData, clearInput } from "../../store/actionsCreator";

const StyledWrapper = styled.button`
  height: 45px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-left: none;
  border-right: none;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.m};
  cursor: pointer;
`;

export interface SearchButtonInterface {
  searchInputValue: string;
  fetchData: (searchInputValue: string, offset?: number, limit?: number) => any;
  clearInput: () => any;
}

const SearchButton: React.FC<SearchButtonInterface> = ({
  searchInputValue,
  fetchData,
  clearInput,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    fetchData(searchInputValue);
    clearInput();
  };
  return (
    <StyledWrapper className="search__button" onClick={handleClick}>
      <FaSearch />
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => ({
  searchInputValue: state.searchInputValue,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (searchInputValue) =>
      dispatch(fetchData(searchInputValue, null, null)),
    clearInput: () => dispatch(clearInput()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
