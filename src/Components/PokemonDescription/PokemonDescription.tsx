import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    padding: 5px;
    list-style: none;
  }
`;

export const PokemonDescription = ({ pokemonData }) => {
  const {
    name,
    height,
    id,
    weight,
    sprites: { front_default: img },
  } = pokemonData;
  return (
    <StyledWrapper>
      <li className="pokemon__name">Imię: {name}</li>
      <li className="pokemon__height">Wzrost: {height}</li>
      <li className="pokemon__id">ID: {id}</li>
      <li className="pokemon__weight">Waga: {weight}</li>
      <img className="pokemon__img" src={img} />
    </StyledWrapper>
  );
};
