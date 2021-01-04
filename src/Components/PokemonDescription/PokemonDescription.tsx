import React from "react";
import {
  StyledLi,
  StyledPokemonDescription,
} from "./PokemonDescription.styled";

interface PokemonDescriptionInterface {
  pokemonData: {
    height: number;
    id: number;
    weight: number;
    types: Array<{
      type: {
        name: string;
      };
    }>;
  };
}

export const PokemonDescription: React.FC<PokemonDescriptionInterface> = ({
  pokemonData,
}) => {
  const { height, weight, types } = pokemonData;
  return (
    <StyledPokemonDescription className="description">
      <li className="description__height">Wzrost: {height / 10}m</li>
      <li className="description__weight">Waga: {weight / 10}kg</li>
      {types.map(({ type }) => (
        <StyledLi type={type.name} className="description__type">
          {type.name.toUpperCase()}
        </StyledLi>
      ))}
    </StyledPokemonDescription>
  );
};
