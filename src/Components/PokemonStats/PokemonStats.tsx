import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .stats {
  }
`;

const StyledLi = styled.li<{ base_stat: number }>`
  list-style: none;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
  margin: 5px;
  display: flex;

  span {
    width: 150px;
    height: 10px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.white};
    display: block;
    position: relative;

    ::after {
      content: "";
      display: block;
      top: 0;
      left: 0;
      height: 100%;
      width: ${({ base_stat }) => (base_stat ? `${base_stat}%` : "0%")};
      position: absolute;
      z-index:2;
      background: red;
      border-radius: 5px;
    }

    ::before {
      content: "${({ base_stat }) => (base_stat ? `${base_stat}` : "")}";
      color: white;
      z-index:3;
      display: inline-block;
      position: absolute;
      top: 50%;
      left: ${({ base_stat }) => (base_stat ? base_stat + "%" : "0%")};
      padding: 2px;
      transform: translate(-50%, -50%);
      background:black;
      border-radius:50%;
    }
  }
`;

export interface PokemonStatsInterface {
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
    <StyledWrapper className="stats">
      <ul className="stats__list">
        {stats.map((stat) => (
          <StyledLi base_stat={stat.base_stat} className="stats__item">
            {stat.stat.name}: <span></span>
          </StyledLi>
        ))}
      </ul>
    </StyledWrapper>
  );
};
