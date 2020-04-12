import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledWrapper = styled.section<{ filterSectionVisible: boolean }>`
  display: ${({ filterSectionVisible }) =>
    filterSectionVisible ? "block" : "none"};
`;

export interface FiltersSectionInterface {
  filterSectionVisible: boolean;
}

const FiltersSection: React.FC<FiltersSectionInterface> = ({
  filterSectionVisible,
}) => {
  return (
    <StyledWrapper filterSectionVisible={filterSectionVisible}>
      <select name="" id=""></select>
      <select name="" id=""></select>
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
