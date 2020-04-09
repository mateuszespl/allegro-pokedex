import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateCurrentPage } from "../../store/actionsCreator";

const StyledWrapper = styled.button``;

export interface PaginationButtonInterface {
  previous?: boolean;
  currentPage: number;
  updateCurrentPage: (updatedPage: number) => any;
}

const PaginationButton: React.FC<PaginationButtonInterface> = ({
  previous,
  currentPage,
  updateCurrentPage,
}) => {
  const handleClick = () => {
    const updatedPage = previous ? currentPage - 20 : currentPage + 20;
    updateCurrentPage(updatedPage);
  };

  return (
    <StyledWrapper
      className={`pagination__button ${previous ? "previous" : "next"}`}
      onClick={handleClick}
    >
      {previous ? "cofnij" : "następna"}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentPage: (updatedPage) =>
      dispatch(updateCurrentPage(updatedPage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationButton);
