import React from "react";
import styled from "styled-components";
import PaginationButton from "../../PaginationButton/PaginationButton";

const StyledWrapper = styled.section`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaginationSection: React.FC = () => {
  return (
    <StyledWrapper>
      <PaginationButton previous />
      <PaginationButton />
    </StyledWrapper>
  );
};

export default PaginationSection;
