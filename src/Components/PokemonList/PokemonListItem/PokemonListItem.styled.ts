import styled from "styled-components";

export const StyledPokemon = styled.li<{ type1: string; type2: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-around;
  margin: 10px 0;
  border-radius: 10px;
  padding: 10px;
  background: ${({ theme, type1, type2 }) => {
    if (type2 !== undefined) {
      const index1 = Object.keys(theme.colors).findIndex(
        (colorKey) => colorKey === type1
      );
      const color1: any = Object.values(theme.colors)[index1];
      const index2 = Object.keys(theme.colors).findIndex(
        (colorKey) => colorKey === type2
      );
      const color2: any = Object.values(theme.colors)[index2];
      return `linear-gradient(45deg, ${color1}, ${color2})`;
    } else {
      const index1 = Object.keys(theme.colors).findIndex(
        (colorKey) => colorKey === type1
      );
      const color1: any = Object.values(theme.colors)[index1];
      return color1;
    }
  }};
  box-shadow: 0px 0px 10px 3px ${({ theme }) => theme.colors.lightBlack};

  ${({ theme }) => theme.media.tablet} {
    flex-wrap: wrap;
  }
`;
