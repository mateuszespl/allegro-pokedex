import styled from "styled-components";

export const StyledAutocompleteList = styled.ul<{
  autocompleteList: string[];
}>`
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
