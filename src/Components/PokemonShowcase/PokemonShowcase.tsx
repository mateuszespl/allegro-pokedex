import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .showcase {
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
  };
}

export const PokemonShowcase: React.FC<PokemonShowcaseInterface> = ({
  pokemonData,
}) => {
  const {
    name,
    sprites: { front_default: img },
  } = pokemonData;
  return (
    <StyledWrapper className="showcase">
      <header className="showcase__name">
        <h1>{name.toUpperCase()}</h1>
      </header>
      <div className="showcase__img">
        <img src={img} alt={`${name} avatar`} />
      </div>
    </StyledWrapper>
  );
};
