import styled from "styled-components";

export const StyledAutocompleteListItem = styled.button`
  font-size: ${({ theme }) => theme.fonts.m};
  border: none;
  background: ${({ theme }) => theme.colors.darkWhite};
  margin: 5px 0;
  text-align: left;
  padding: 10px 15px;
  list-style: none;
  outline: none;
  cursor: pointer;
  height: 45px;
  border-radius: 10px;

  :hover {
    background: ${({ theme }) => theme.colors.red};
    color: white;
  }
`;
