import styled from "styled-components";

export const StyledPokemonDescription = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  order: 2;

  li {
    margin: 5px;
    list-style: none;
    padding: 5px 10px;
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
    box-shadow: 2px 2px 3px 0px ${({ theme }) => theme.colors.lightBlack};
    font-size: ${({ theme }) => theme.fonts.m};
  }

  .description {
    &__height,
    &__weight {
      background: ${({ theme }) => theme.colors.lightBlack};
    }
  }

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    margin: 10px 0 0 0;
    width: 100%;
    order: 3;
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
  font-weight: 800;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
  box-shadow: 2px 2px 3px 0px ${({ theme }) => theme.colors.lightBlack};
`;
