import React from "react";

import {
  StyledPokemonListItemStats,
  StyledPokemonListItemStatsLi,
} from "./PokemonListItemStats.styled";

interface PokemonListItemStatsInterface {
  pokemonData: {
    stats: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
    types;
  };
}

export const PokemonListItemStats: React.FC<PokemonListItemStatsInterface> = ({
  pokemonData,
}) => {
  const { stats, types } = pokemonData;
  return (
    <StyledPokemonListItemStats className="stats">
      <ul className="stats__list">
        {stats.map((stat, id) => (
          <StyledPokemonListItemStatsLi
            type={types[0].type.name}
            key={`${stat.base_stat} ${id}`}
            base_stat={stat.base_stat}
            className="stats__item"
          >
            <p>{stat.stat.name.toUpperCase()}</p> <span>{stat.base_stat}</span>
          </StyledPokemonListItemStatsLi>
        ))}
      </ul>
    </StyledPokemonListItemStats>
  );
};
