import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FiltersList } from "../../FiltersList/FiltersList";

const StyledWrapper = styled.section<{ filterSectionVisible: boolean }>`
  margin: 0 auto;
  width: 550px;
  height: ${({ filterSectionVisible }) =>
    filterSectionVisible ? "80px" : "0px"};
  overflow: ${({ filterSectionVisible }) =>
    filterSectionVisible ? "unset" : "hidden"};
  border: ${({ filterSectionVisible, theme }) =>
    filterSectionVisible ? `1px solid ${theme.colors.darkGrey}` : ""};
  border-top: none;
  bottom: 40px;
  position: relative;
  border-radius: 0 0 25px 25px;
  padding: 35px 0 0 0;
  background: ${({ theme, filterSectionVisible }) =>
    filterSectionVisible ? theme.colors.white : "unset"};
`;

export interface FiltersSectionInterface {
  filterSectionVisible: boolean;
}

const FiltersSection: React.FC<FiltersSectionInterface> = ({
  filterSectionVisible,
}) => {
  return (
    <StyledWrapper
      className="filter__section"
      filterSectionVisible={filterSectionVisible}
    >
      <FiltersList />
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    filterSectionVisible: state.filterSectionVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersSection);
