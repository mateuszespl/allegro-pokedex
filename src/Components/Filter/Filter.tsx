import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { setCurrentFilters } from "../../store/actionsCreator";
import FilterBox from "../FilterBox/FilterBox";
import { FilterSwitchButton } from "../FilterSwitchButton/FilterSwitchButton";
import { FilterApplyButton } from "../FilterApplyButton/FilterApplyButton";

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
`;

export interface FilterInterface {
  filter: string;
  setFilters: (e: React.FormEvent<HTMLButtonElement>) => any;
  displayMode: string;
}

const Filter: React.FC<FilterInterface> = ({
  filter,
  setFilters,
  displayMode,
}) => {
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const [filterApplied, setFilterApplied] = useState<boolean>(false);

  const handleClick = (e) => {
    e.preventDefault();
    setFilters(e);
    setFilterVisible(!filterVisible);
    setFilterApplied(!filterApplied);
  };

  useEffect(() => {
    if (displayMode === "Filter") {
      setFilterApplied(false);
    }
  }, [displayMode]);
  return (
    <StyledWrapper
      filterApplied={filterApplied}
      filterVisible={filterVisible}
      className="filter"
    >
      <FilterSwitchButton
        displayMode={displayMode}
        filter={filter}
        filterApplied={filterApplied}
        filterVisible={filterVisible}
        setFilterVisible={setFilterVisible}
      />
      <FilterBox filter={filter} />
      <FilterApplyButton filter={filter} handleClick={handleClick} />
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    displayMode: state.displayMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: (e) => dispatch(setCurrentFilters(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
