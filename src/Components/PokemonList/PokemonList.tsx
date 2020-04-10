import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PokemonListItem from "../PokemonListItem/PokemonListItem";

const StyledWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 40px;
`;

export interface PokemonListInterface {
  pokemonList: Array<{
    name: string;
  }>;
}

const PokemonList: React.FC<PokemonListInterface> = ({ pokemonList }) => {
  return (
    <StyledWrapper className="display__list">
      {pokemonList.map((pokemon, id) => (
        <PokemonListItem key={id} pokemon={pokemon} />
      ))}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemonList: state.pokemonList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
