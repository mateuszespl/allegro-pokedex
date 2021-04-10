import styled from "styled-components";

export const StyledFilter = styled.li<{
  filterVisible: boolean;
  filterApplied: boolean;
}>`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 15px;
  list-style: none;
  width: 120px;
  position: relative;
  height: ${({ filterVisible }) => (filterVisible ? "100%" : "30px")};
  outline: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 100;
  background: ${({ theme }) => theme.colors.darkWhite};

  ${({ theme }) => theme.media.smallTablet} {
    margin: 5px;
  }
`;
