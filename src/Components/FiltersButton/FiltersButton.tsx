import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FaFilter } from "react-icons/fa";
import { setFilterSectionVisibility } from "../../store/actionsCreator";

const StyledWrapper = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: none;
  border-radius: 0 25px 25px 0;
  padding: 0 15px 0 0;
  cursor: pointer;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.s};
`;

export interface FiltersButtonInterface {
  setFilterSectionVisibility: () => any;
}

const FiltersButton: React.FC<FiltersButtonInterface> = ({
  setFilterSectionVisibility,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    setFilterSectionVisibility();
  };
  return (
    <StyledWrapper onClick={handleClick}>
      <FaFilter />
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterSectionVisibility: () => dispatch(setFilterSectionVisibility()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersButton);
