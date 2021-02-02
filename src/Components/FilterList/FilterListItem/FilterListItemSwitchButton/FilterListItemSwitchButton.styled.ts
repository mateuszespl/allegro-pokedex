import styled from "styled-components";

export const StyledFilterListItemSwitchButton = styled.button<{
  filterApplied: boolean;
  filterVisible: boolean;
  displayMode: string;
}>`
  padding: 0 0 0 5px;
  width: 100%;
  height: 30px;
  outline: none;
  position: absolute;
  border: none;
  opacity: ${({ filterApplied, displayMode }) =>
    filterApplied || displayMode === "Filter" ? "50%" : "100%"};
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  font-weight: 400;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.s};
  background: ${({ theme }) => theme.colors.darkWhite};
  z-index: 100;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: ${({ filterApplied, displayMode }) =>
    filterApplied || displayMode === "Filter" ? "unset" : "pointer"};

  &:disabled,
  [disabled] {
    cursor: not-allowed;
  }

  svg {
    margin: 0 3px;
    font-size: ${({ theme }) => theme.fonts.m};
    transform: ${({ filterVisible }) =>
      filterVisible ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;
