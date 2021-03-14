import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 40px;

  .navbar__logo {
    position: relative;
    display: flex;
    align-items: center;

    a {
      display: flex;
      text-decoration: none;
    }

    h1 {
      color: black;
    }

    img {
      margin: 0 0 0 10px;
      width: 30px;
      height: 30px;
    }
  }
`;
