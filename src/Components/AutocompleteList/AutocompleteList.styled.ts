import styled from "styled-components";

export const StyledAutocompleteList = styled.ul<{
  autocompleteList: string[];
}>`
  position: absolute;
  display: ${({ autocompleteList }) =>
    autocompleteList.length > 0 ? "flex" : "none"};
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors.transparentWhite};
  padding: 10px 15px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fonts.m};
  z-index: 1000;
`;
