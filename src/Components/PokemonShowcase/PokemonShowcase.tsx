import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div<{ pokeId: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  order:1;
  
  ::after {
    content:"${({ pokeId }) => (pokeId ? `#${pokeId}` : `#`)}";
    position:absolute;
    top:0;
    left:0;
    width:50px;
    font-weight:800;
    font-size:${({ theme }) => theme.fonts.m};
    height:50px;
    background:${({ theme }) => theme.colors.darkWhite};
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    box-shadow:2px 2px 5px 3px ${({ theme }) => theme.colors.lightBlack};
    transform:translate(-25%,-25%);
  }

  .showcase {
    &__name {
      margin: 5px;
      h1 {
        color: ${({ theme }) => theme.colors.white};
        text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
        font-size: ${({ theme }) => theme.fonts.l};
      }
    }

    &__img {
      position: relative;
      height: 130px;
      width: 130px;

      ::after {
        content: "";
        background-image: url("https://www.shareicon.net/data/128x128/2016/10/18/844160_game_512x512.png");
        width: 110%;
        height: 110%;
        position: absolute;
        background-size: cover;
        opacity: 10%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        z-index: 0;
      }

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

  ${({ theme }) => theme.media.tablet}{
    width:45%;
  }

  ${({ theme }) => theme.media.smallTablet}{
    width:60%;
  }

  ${({ theme }) => theme.media.largeMobile} {
    width:50%;

    ::after{
      font-size:${({ theme }) => theme.fonts.s};
      height:35px;
      width:35px;
    }

    .showcase__name{
      h1{
        font-size: ${({ theme }) => theme.fonts.m};

      }
    }
  }

  ${({ theme }) => theme.media.mobile} {
    width:40%;

    .showcase__img{
      height:80px;
      width:80px;
    }
  }
`;

export interface PokemonShowcaseInterface {
  pokemonData: {
    name: string;
    sprites: {
      front_default: string;
    };
    id: number;
  };
}

export const PokemonShowcase: React.FC<PokemonShowcaseInterface> = ({
  pokemonData,
}) => {
  const {
    name,
    sprites: { front_default: img },
    id,
  } = pokemonData;
  return (
    <StyledWrapper pokeId={id} className="showcase">
      <header className="showcase__name">
        <h1>{name.toUpperCase()}</h1>
      </header>
      <div className="showcase__img">
        <img src={img} alt={`${name} avatar`} />
      </div>
    </StyledWrapper>
  );
};
