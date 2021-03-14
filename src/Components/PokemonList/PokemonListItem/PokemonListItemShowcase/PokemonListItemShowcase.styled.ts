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
      width: 250px;
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
    width: 100%;
  }

  ${({ theme }) => theme.media.smallTablet} {
    flex-wrap: wrap;
    flex-direction: column;

    span {
      position: absolute;
      top: 20px;
      left: 20px;
    }

    .showcase {
      &__name {
        width: 100%;
        text-align: center;
      }

      &__img {
        height: 300px;
        width: 300px;
      }
    }
  }

  ${({ theme }) => theme.media.largeMobile} {
    .showcase__name {
      h1 {
        font-size: ${({ theme }) => theme.fonts.xl};
      }
    }
  }
`;
