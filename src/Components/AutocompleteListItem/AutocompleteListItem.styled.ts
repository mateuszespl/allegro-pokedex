import styled from "styled-components";

export const StyledAutocompleteListItem = styled.button`
  font-size: ${({ theme }) => theme.fonts.m};
  border: none;
  background: none;
  margin: 5px 0;
  text-align: left;
  padding: 5px;
  list-style: none;
  outline: none;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.colors.green};
    border-radius: 5px;
    color: white;
  }
`;
