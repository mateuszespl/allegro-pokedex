import React from "react";
import styled from "styled-components";
import PaginationButton from "../../PaginationButton/PaginationButton";
import PaginationSelect from "../../PaginationSelect/PaginationSelect";
import { connect } from "react-redux";
import PaginationReturnButton from "../../PaginationReturnButton/PaginationReturnButton";

const StyledWrapper = styled.section`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface PaginationSectionInterface {
  displayMode: string;
}

export const PaginationSection: React.FC<PaginationSectionInterface> = ({
  displayMode,
}) => {
  return (
    <StyledWrapper className="pagination" data-test="pagination">
      {displayMode !== "Filter" ? (
        <>
          <PaginationButton previous />
          <PaginationSelect />
          <PaginationButton />
        </>
      ) : (
        <PaginationReturnButton />
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    displayMode: state.displayMode,
  };
};

export default connect(mapStateToProps, null)(PaginationSection);
