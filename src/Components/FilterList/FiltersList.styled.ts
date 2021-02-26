import styled from "styled-components";

export const StyledFilterList = styled.section<{
  filterSectionVisible: boolean;
}>`
  position: fixed;
  right: 0;
  top: 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
