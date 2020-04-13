import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div<{ pokeId: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
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
        background-image: url("https://png2.cleanpng.com/sh/fce5c12427b6855d57f16d061c3953fd/L0KzQYq3V8MyN6l2j5H0aYP2gLBuTgRzaZ94iNN7ZX7miX79ifRmd15sed9ucz3pgrbsTgBwc5Zned51LYDxd376ifxpd6ZqjOZuLXTyh7BzjBFlNWMyiNDwLXHwPYbrVMFkOZQAetgEZkK7Poq5UcY2PmU1SacBNEW8QIa6V8c5PGoziNDw/kisspng-transparency-video-games-free-pokeball-png-silhouette-download-2-png-am-5d41c1c9bf9f28.9216564015645905377849.png");
        width: 110%;
        height: 110%;
        position: absolute;
        background-size: cover;
        opacity: 10%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        z-index: 1;
      }

      img {
        z-index: 2;
        position: relative;
        width: 100%;
        height: 100%;
        object-position: center center;
        object-fit: cover;
      }
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
