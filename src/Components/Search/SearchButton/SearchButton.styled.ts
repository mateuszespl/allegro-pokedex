import styled from "styled-components";

export const StyledSearchButton = styled.button`
  height: 45px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-left: none;
  border-right: none;
  background: ${({ theme }) => theme.colors.white};
  outline: none;
  font-size: ${({ theme }) => theme.fonts.m};
  cursor: pointer;
`;
