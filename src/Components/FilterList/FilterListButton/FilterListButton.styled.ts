import styled from "styled-components";

export const StyledFilterListButton = styled.button<{ filtersCount: number }>`
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

  ::after {
    content: "${({ filtersCount }) => filtersCount}";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    font-weight: 800;
    justify-content: center;
    font-size: ${({ theme }) => theme.fonts.xxs};
    color: ${({ theme }) => theme.colors.white};
    bottom: 25%;
    right: 30%;
    background: ${({ theme }) => theme.colors.darkGrey};
  }
`;
