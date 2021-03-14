import styled from "styled-components";

export const StyledPokemonListItemStats = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 10px 20px 10px 10px;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 2px 3px 0px ${({ theme }) => theme.colors.lightBlack};
  order: 3;
  height: 130px;

  ${({ theme }) => theme.media.tablet} {
    width: 50%;
    display: none;
  }

  ${({ theme }) => theme.media.smallTablet} {
    display: none;
  }
`;

export const StyledPokemonListItemStatsLi = styled.li<{
  base_stat: number;
  type: string;
}>`
  list-style: none;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bolder;
  text-align: left;
  margin: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fonts.xxs};
    width: 120px;
  }

  span {
    width: 180px;
    height: 10px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.white};
    display: block;
    position: relative;
    z-index: 0;
    margin: 0 0 0 15px;
    font-size: ${({ theme }) => theme.fonts.xs};
    font-weight: 800;

    ::after {
      content: "";
      display: block;
      top: 0;
      left: 30px;
      height: 100%;
      width: ${({ base_stat }) => (base_stat ? `${base_stat}%` : "0%")};
      max-width: 90%;
      position: absolute;
      z-index: 2;
      background: ${({ theme, type }) => {
        const index = Object.keys(theme.colors).findIndex(
          (colorKey) => colorKey === type
        );
        const color: any = Object.values(theme.colors)[index];
        return color;
      }};
      border-radius: 10px;
    }
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fonts.xxs};

    span {
      width: 100px;
      height: 5px;

      ::before {
        width: 14px;
        height: 14px;
        font-weight: 400;
      }
    }
  }
`;
