import React from "react";
import styled from "styled-components";
import { SearchSection } from "./Wrappers/SearchSection/SearchSection";
import DisplaySection from "./Wrappers/DisplaySection/DisplaySection";
import FiltersSection from "./Wrappers/FiltersSection/FiltersSection";
import LoadingScreen from "./LoadingScreen/LoadingScreen";
import { connect } from "react-redux";

const StyledWrapper = styled.main<{ pokemonDataList: Array<any> }>`
  position: relative;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${({ pokemonDataList }) =>
    pokemonDataList.length < 963 ? "100vh" : "unset"};
`;

export interface PokedexMainInterface {
  pokemonDataList: Array<any>;
}

const PokedexMain: React.FC<PokedexMainInterface> = ({ pokemonDataList }) => {
  return (
    <StyledWrapper pokemonDataList={pokemonDataList} id="main" className="main">
      {pokemonDataList.length < 964 && <LoadingScreen />}
      <SearchSection />
      <FiltersSection />
      <DisplaySection />
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemonDataList: state.pokemonDataList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PokedexMain);
