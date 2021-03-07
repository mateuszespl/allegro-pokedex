import React from "react";
import {
  StyledLi,
  StyledPokemonListItemDescription,
} from "./PokemonListItemDescription.styled";

interface PokemonListItemDescriptionInterface {
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

export const PokemonListItemDescription: React.FC<PokemonListItemDescriptionInterface> = ({
  pokemonData,
}) => {
  const { height, weight, types } = pokemonData;
  return (
    <StyledPokemonListItemDescription className="description">
      <li className="description__height">
        HEIGHT <span>{height / 10}m</span>
      </li>
      <li className="description__weight">
        WEIGHT <span>{weight / 10}kg</span>
      </li>
      {types.map(({ type }) => (
        <StyledLi
          type={type.name}
          key={type.name}
          className="description__type"
        >
          {type.name.toUpperCase()}
        </StyledLi>
      ))}
    </StyledPokemonListItemDescription>
  );
};
