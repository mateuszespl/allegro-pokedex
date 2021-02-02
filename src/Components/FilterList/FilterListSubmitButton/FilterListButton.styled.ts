import styled from "styled-components";

export const StyledFilterListSubmitButton = styled.button<{
  currentFilters: Array<any>;
  filterApplied: boolean;
}>`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 15px;
  list-style: none;
  width: 120px;
  position: relative;
  height: 30px;
  opacity: ${({ currentFilters }) =>
    currentFilters.length === 0 ? "50%" : "100%"};
  outline: none;
  font-size: ${({ theme }) => theme.fonts.s};
  background: ${({ theme, filterApplied }) =>
    !filterApplied ? theme.colors.green : theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  cursor: ${({ currentFilters }) =>
    currentFilters.length === 0 ? "unset" : "pointer"};

  &:disabled,
  [disabled] {
    cursor: not-allowed;
  }
`;
