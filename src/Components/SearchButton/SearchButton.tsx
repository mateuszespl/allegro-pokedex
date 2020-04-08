import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { fetchData } from "../../store/actionsCreator";

const StyledWrapper = styled.button`
  height: 45px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-left: none;
  border-radius: 0 25px 25px 0;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.m};
  cursor: pointer;
`;

export interface SearchButtonInterface {
  searchInputValue: string;
  fetchData: (searchInputValue: string) => any;
}

const SearchButton: React.FC<SearchButtonInterface> = ({
  searchInputValue,
  fetchData,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    fetchData(searchInputValue);
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
    fetchData: (searchInputValue) => dispatch(fetchData(searchInputValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
