import styled from "styled-components";

export const StyledSearchInput = styled.label<{ autocompleteList: Array<any> }>`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    height: 45px;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    padding: 10px 15px;
    border-radius: 25px 0 0 25px;
    border-right: none;
    font-size: ${({ theme }) => theme.fonts.m};
    outline: none;
    background: ${({ theme }) => theme.colors.white};
    -webkit-appearance: none;

    &:disabled,
    [disabled] {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.lightGrey};
      opacity: 1 !important;
      cursor: not-allowed;
    }
  }
`;
