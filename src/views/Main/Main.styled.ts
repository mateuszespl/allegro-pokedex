import styled from "styled-components";

export const StyledMain = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .displaySection {
    padding: 80px 40px;
    background: ${({ theme }) => theme.colors.darkWhite};
    position: relative;
  }
`;
