import styled from "styled-components";

export const StyledPokemonListItemStats = styled.div`
  background: ${({ theme }) => theme.colors.lightBlack};
  padding: 10px 20px 10px 10px;
  border-radius: 25px;
  box-shadow: 2px 2px 3px 0px ${({ theme }) => theme.colors.lightBlack};
  order: 3;

  ${({ theme }) => theme.media.tablet} {
    width: 55%;
    order: 2;
  }

  ${({ theme }) => theme.media.smallTablet} {
    display: none;
  }
`;

export const StyledPokemonListItemStatsLi = styled.li<{ base_stat: number }>`
  list-style: none;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
  margin: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.s};

  span {
    width: 150px;
    height: 10px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.white};
    display: block;
    position: relative;
    z-index: 0;
    margin: 0 0 0 15px;
    font-size: ${({ theme }) => theme.fonts.xxs};
    font-weight: 800;

    ::after {
      content: "";
      display: block;
      top: 0;
      left: 0;
      height: 100%;
      width: ${({ base_stat }) => (base_stat ? `${base_stat}%` : "0%")};
      max-width: 100%;
      position: absolute;
      z-index: 2;
      background: ${({ theme }) => theme.colors.darkGrey};
      border-radius: 10px;
    }

    ::before {
      content: "${({ base_stat }) => (base_stat ? `${base_stat}` : "")}";
      color: 1px 1px 1px ${({ theme }) => theme.colors.white};
      z-index: 3;
      display: inline-block;
      position: absolute;
      top: 50%;
      left: ${({ base_stat }) =>
        !(base_stat > 100) ? `${base_stat}%` : "100%"};
      transform: translate(-50%, -50%);
      background: ${({ theme }) => theme.colors.grey};
      box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.colors.lightBlack};
      border-radius: 50%;
      width: 19px;
      height: 19px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
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
