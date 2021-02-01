import styled from "styled-components";

export const StyledFilterList = styled.section<{
  filterSectionVisible: boolean;
}>`
  margin: 0 auto;
  width: 550px;
  height: ${({ filterSectionVisible }) =>
    filterSectionVisible ? "80px" : "0px"};
  display: ${({ filterSectionVisible }) =>
    filterSectionVisible ? "unset" : "none"};
  border: ${({ filterSectionVisible, theme }) =>
    filterSectionVisible ? `1px solid ${theme.colors.darkGrey}` : ""};
  border-top: none;
  bottom: 40px;
  position: relative;
  border-radius: 0 0 25px 25px;
  padding: 35px 0 10px 0;
  background: ${({ theme, filterSectionVisible }) =>
    filterSectionVisible ? theme.colors.white : "unset"};

  ${({ theme }) => theme.media.smallTablet} {
    width: 300px;
    height: ${({ filterSectionVisible }) =>
      filterSectionVisible ? "100%" : "0px"};
  }

  ${({ theme }) => theme.media.mobile} {
    width: 280px;
  }

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
