import styled from "styled-components";

export const StyledLoadingScreen = styled.div<{ pokemonDataList: Array<any> }>`
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
