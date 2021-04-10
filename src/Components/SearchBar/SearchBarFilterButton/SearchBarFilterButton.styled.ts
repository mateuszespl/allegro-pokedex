import styled from "styled-components";

export const StyledSearchBarFilterButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: none;
  border-radius: 0 25px 25px 0;
  padding: 0 15px 0 0;
  cursor: pointer;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.s};
  background: ${({ theme }) => theme.colors.white};
  position: relative;

  &:disabled,
  [disabled] {
    cursor: not-allowed;
  }
`;
