import styled from "styled-components";

export const StyledFilterList = styled.section<{
  isFilterSectionVisible: boolean;
}>`
  position: fixed;
  left: 0;
  top: 60px;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 150px;
  z-index: 1000;
  padding: 20px 40px;
  display: ${({ isFilterSectionVisible }) => !isFilterSectionVisible && "none"};

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
