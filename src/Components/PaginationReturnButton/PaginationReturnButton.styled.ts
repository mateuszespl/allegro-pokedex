import styled from "styled-components";

export const StyledPaginationReturnButton = styled.a`
  padding: 10px 20px;
  text-decoration: none;
  margin: 0 10px;
  width: 200px;
  height: 40px;
  text-align: center;
  border: none;
  background: ${({ theme }) => theme.colors.lightBlack};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fonts.m};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
  cursor: pointer;
  box-shadow: 0px 1px 3px 0px ${({ theme }) => theme.colors.lightBlack};
  font-weight: 800;
  position: relative;
  outline: none;
  text-decoration: none;
`;
