import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.button`
  background: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.xs};
  border: none;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
`;

export interface FilterApplyButtonInterface {
  filter: string;
  handleClick: (e: React.FormEvent<HTMLButtonElement>) => any;
}

export const FilterApplyButton: React.FC<FilterApplyButtonInterface> = ({
  filter,
  handleClick,
}) => {
  return (
    <StyledWrapper
      value={filter}
      onClick={handleClick}
      className="filter__button"
    >
      Zastosuj filtr
    </StyledWrapper>
  );
};
