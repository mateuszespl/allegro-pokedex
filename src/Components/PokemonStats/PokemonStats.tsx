import React from "react";

import {
  StyledPokemonStats,
  StyledPokemonStatsLi,
} from "./PokemonStats.styled";

interface PokemonStatsInterface {
  pokemonData: {
    stats: Array<{
      base_stat: number;
      stat: {
        name: string;
      };
    }>;
  };
}

export const PokemonStats: React.FC<PokemonStatsInterface> = ({
  pokemonData,
}) => {
  const { stats } = pokemonData;
  return (
    <StyledPokemonStats className="stats">
      <ul className="stats__list">
        {stats.map((stat) => (
          <StyledPokemonStatsLi
            base_stat={stat.base_stat}
            className="stats__item"
          >
            {stat.stat.name.toUpperCase()} <span></span>
          </StyledPokemonStatsLi>
        ))}
      </ul>
    </StyledPokemonStats>
  );
};
