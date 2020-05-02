import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FaFilter } from "react-icons/fa";
import { setFilterSectionVisibility } from "../../store/actionsCreator";

const StyledWrapper = styled.button<{ filtersCount: number }>`
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: none;
  border-radius: 0 25px 25px 0;
  padding: 0 15px 0 0;
  cursor: pointer;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.s};
  background: ${({ theme }) => theme.colors.white};
  position:relative;

  &:disabled, [disabled]{
    cursor:not-allowed;
  }

  ::after{
  content: "${({ filtersCount }) => filtersCount}";
    position:absolute;
    width:12px;
    height:12px;
    border-radius:50%;
    display:flex;
    align-items:center;
    font-weight:800;
    justify-content:center;
    font-size:${({ theme }) => theme.fonts.xxs};
    color:${({ theme }) => theme.colors.white};
    bottom:25%;
    right:30%;
    background:${({ theme }) => theme.colors.darkGrey};

  }
`;

export interface FiltersButtonInterface {
  setFilterSectionVisibility: () => any;
  filtersCount: number;
  searchInputValue: string;
}

export const FiltersButton: React.FC<FiltersButtonInterface> = ({
  setFilterSectionVisibility,
  filtersCount,
  searchInputValue,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    setFilterSectionVisibility();
  };
  return (
    <StyledWrapper
      disabled={searchInputValue.length !== 0 ? true : false}
      filtersCount={filtersCount}
      onClick={handleClick}
      data-test="filtersButton"
    >
      <FaFilter />
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    searchInputValue: state.searchInputValue,
    filtersCount: state.currentFilters.length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterSectionVisibility: () => dispatch(setFilterSectionVisibility()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersButton);
