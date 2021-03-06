import styled from "styled-components";

export const StyledFilterListItem = styled.li<{ type: string }>`
  padding: 5px 10px;
  list-style: none;
  height: calc(100vh / 18);
  width: 10vw;
  position: relative;
  outline: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 100;
  background: ${({ theme, type }) => {
    const index = Object.keys(theme.colors).findIndex(
      (colorKey) => colorKey === type
    );
    const color: any = Object.values(theme.colors)[index];
    return color;
  }};
  box-shadow: 2px 2px 3px 0px ${({ theme }) => theme.colors.lightBlack};
  border-radius: 10px;

  button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 800;
    text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fonts.m};
    background: none;
    border: none;
  }

  ${({ theme }) => theme.media.smallTablet} {
    margin: 5px;
  }
`;
