import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledWrapper = styled.div<{ pokemonDataList: Array<any> }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    flex-direction: column;
    width: 300px;

    span {
      width: 100%;
      height: 10px;
      border-radius: 10px;
      border: 1px solid ${({ theme }) => theme.colors.black};
      margin: 10px;
      position: relative;

      ::after {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        display: block;
        height: 100%;
        background: ${({ theme }) => theme.colors.black};
        width: ${({ pokemonDataList }) => `${pokemonDataList.length / 10}%`};
      }
    }
  }
`;

export interface LoadingScreenInterface {
  pokemonDataList: Array<any>;
}

const LoadingScreen: React.FC<LoadingScreenInterface> = ({
  pokemonDataList,
}) => {
  return (
    <StyledWrapper pokemonDataList={pokemonDataList}>
      <div>
        <img
          src="https://pa1.narvii.com/6849/a24733a2eb676de083dd5851b44483cb79f9fc55_00.gif"
          alt=""
        />
        <p>Złapano {pokemonDataList.length} / 964 pokemonów.</p>
        <span></span>
        <p>Proszę czekać, trwa ładowanie...</p>
      </div>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemonDataList: state.pokemonDataList,
  };
};

export default connect(mapStateToProps, null)(LoadingScreen);
