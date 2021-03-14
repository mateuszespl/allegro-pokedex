import styled from "styled-components";

export const StyledPokemonListItemDescription = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  order: 2;
  background: ${({ theme }) => theme.colors.white};
  padding: 10px 10px 10px 10px;
  border-radius: 10px 0 0 10px;
  box-shadow: 2px 2px 3px 0px ${({ theme }) => theme.colors.lightBlack};
  height: 130px;
  min-width: 140px;
  margin: 0 0 0 auto;

  li {
    list-style: none;
    margin: 5px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bolder;
    font-size: ${({ theme }) => theme.fonts.xxs};
  }

  span {
    margin: 0 0 0 20px;
    font-size: ${({ theme }) => theme.fonts.xs};
  }

  .description {
    &__height,
    &__weight {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  ${({ theme }) => theme.media.tablet} {
    width: 30%;
    display: none;
  }

  ${({ theme }) => theme.media.smallTablet} {
    order: 2;
    width: 40%;
    flex-direction: column;
    margin: unset;
  }

  ${({ theme }) => theme.media.largeMobile} {
    width: 50%;
    li {
      font-size: ${({ theme }) => theme.fonts.s};
    }
  }

  ${({ theme }) => theme.media.mobile} {
    width: 60%;
  }
`;

export const StyledLi = styled.li<{ type: any }>`
  background: ${({ theme, type }) => {
    const index = Object.keys(theme.colors).findIndex(
      (colorKey) => colorKey === type
    );
    const color: any = Object.values(theme.colors)[index];
    return color;
  }};

  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  font-weight: 800;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
  box-shadow: 2px 2px 3px 0px ${({ theme }) => theme.colors.lightBlack};
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
`;
