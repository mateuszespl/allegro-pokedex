import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledWrapper = styled.ul`
  li {
    list-style: none;
  }
`;

const PokemonListItem = ({ pokemon, key }) => {
  return (
    <StyledWrapper key={key} className="pokemon" id={pokemon.name}>
      <li className="pokemon__name">{pokemon.name}</li>
      <br />
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListItem);
