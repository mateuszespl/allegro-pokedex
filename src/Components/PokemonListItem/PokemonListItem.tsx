import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchPokemonData } from "../../functions/fetchPokemonDataFunction";
import { PokemonDescription } from "../PokemonDescription/PokemonDescription";

const StyledWrapper = styled.ul`
  width: 80vh;
`;

export interface PokemonListItemInterface {
  pokemon: {
    name: string;
  };
  key: number;
}

export interface pokemonDataInterface {
  name: string;
  height: number;
  id: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}

const PokemonListItem: React.FC<PokemonListItemInterface> = ({
  pokemon,
  key,
}) => {
  const [pokemonData, setPokemonData] = useState<
    pokemonDataInterface | undefined
  >(undefined);

  useEffect(() => {
    fetchPokemonData(pokemon.name)
      .then((parsedData) => setPokemonData(parsedData))
      .catch(
        (err) => new Error(`Nie można pobrać danych o ${pokemon.name}. ${err}`)
      );
  }, [pokemon.name]);

  return (
    <>
      {pokemonData ? (
        <StyledWrapper key={key} className="pokemon" id={pokemon.name}>
          <PokemonDescription pokemonData={pokemonData} />
        </StyledWrapper>
      ) : undefined}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListItem);
