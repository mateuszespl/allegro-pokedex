import styled from "styled-components";

export const StyledSearchBarInput = styled.label<{
  autocompleteList: string[];
}>`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    height: 45px;
    padding: 10px 15px;
    border-radius: 10px 0 0 10px;
    border: none;
    font-size: ${({ theme }) => theme.fonts.m};
    font-weight: 500;
    outline: none;
    background: ${({ theme }) => theme.colors.darkWhite};
    -webkit-appearance: none;

    &:disabled,
    [disabled] {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.lightGrey};
      opacity: 1 !important;
      cursor: not-allowed;
    }
  }
`;
