import styled from "styled-components";

export const StyledPokemonListItemShowcase = styled.div<{
  pokeId: number;
  type: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  order: 1;

  span {
    display: block;
    font-size: ${({ theme }) => theme.fonts.id};
    color: ${({ theme, type }) => {
      const index = Object.keys(theme.colors).findIndex(
        (colorKey) => colorKey === type
      );
      const color: any = Object.values(theme.colors)[index];
      return color;
    }};

    filter: brightness(75%);
    margin: 0 15px 0 0;
  }

  .showcase {
    &__name {
      margin: 5px;
      h1 {
        color: ${({ theme }) => theme.colors.white};
        text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
        font-size: ${({ theme }) => theme.fonts.xxl};
      }
    }

    &__img {
      position: relative;
      height: 150px;
      width: 150px;

      img {
        z-index: 1;
        position: relative;
        width: 100%;
        height: 100%;
        object-position: center center;
        object-fit: cover;
      }
    }
  }

  ${({ theme }) => theme.media.tablet} {
    width: 45%;
  }

  ${({ theme }) => theme.media.smallTablet} {
    width: 60%;
  }

  ${({ theme }) => theme.media.largeMobile} {
    width: 50%;

    ::after {
      font-size: ${({ theme }) => theme.fonts.s};
      height: 35px;
      width: 35px;
    }

    .showcase__name {
      h1 {
        font-size: ${({ theme }) => theme.fonts.m};
      }
    }
  }

  ${({ theme }) => theme.media.mobile} {
    width: 40%;

    .showcase__img {
      height: 80px;
      width: 80px;
    }
  }
`;
