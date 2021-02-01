import React from "react";
import styled from "styled-components";

import SearchSection from "./Wrappers/SearchSection";
import DisplaySection from "./Wrappers/DisplaySection";
import { connect } from "react-redux";
import FilterList from "./FilterList";

const StyledWrapper = styled.main<{ pokemonDataList: Array<any> }>`
  position: relative;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export interface PokedexMainInterface {
  pokemonDataList: Array<any>;
}

export const PokedexMain: React.FC<PokedexMainInterface> = ({
  pokemonDataList,
}) => {
  return (
    <StyledWrapper
      pokemonDataList={pokemonDataList}
      id="main"
      className="main"
      data-test="main"
    >
      {/* {pokemonDataList.length < 964 && <LoadingScreen />} */}
      <SearchSection />
      <FilterList />
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
