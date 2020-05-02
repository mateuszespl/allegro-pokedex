import React from "react";
import styled from "styled-components";
import AutocompleteButton from "../AutocompleteButton/AutocompleteButton";

const StyledWrapper = styled.ul<{ autocompleteList: Array<any> }>`
  position: absolute;
  display: ${({ autocompleteList }) =>
    autocompleteList.length > 0 ? "flex" : "none"};
  flex-direction: column;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  background: ${({ theme }) => theme.colors.white};
  padding: 10px 15px;
  border-radius: 25px;
  font-size: ${({ theme }) => theme.fonts.m};
  z-index: 1000;
`;

export interface AutocompleteListInterface {
  autocompleteList: Array<any>;
}

export const AutocompleteList: React.FC<AutocompleteListInterface> = ({
  autocompleteList,
}) => {
  return (
    <StyledWrapper
      autocompleteList={autocompleteList}
      className="autocompleteList"
      data-test="autocompleteList"
    >
      {autocompleteList.map((autocompleteItem) => (
        <AutocompleteButton autocompleteItem={autocompleteItem} />
      ))}
    </StyledWrapper>
  );
};
