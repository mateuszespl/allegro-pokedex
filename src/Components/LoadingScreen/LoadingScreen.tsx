import React from "react";

import { StyledLoadingScreen } from "./LoadingScreen.styled";

interface LoadingScreenInterface {
  pokemonDataList: Array<any>;
}

export const LoadingScreen: React.FC<LoadingScreenInterface> = ({
  pokemonDataList,
}) => {
  return (
    <StyledLoadingScreen pokemonDataList={pokemonDataList}>
      <div>
        <img
          src="https://pa1.narvii.com/6849/a24733a2eb676de083dd5851b44483cb79f9fc55_00.gif"
          alt=""
        />
        <p>Złapano {pokemonDataList.length} / 964 pokemonów.</p>
        <span></span>
        <p>Proszę czekać, trwa ładowanie...</p>
      </div>
    </StyledLoadingScreen>
  );
};
