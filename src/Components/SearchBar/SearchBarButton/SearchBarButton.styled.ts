import styled from "styled-components";

export const StyledSearchBarButton = styled.button`
  height: 45px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0 10px 10px 0;
  background: ${({ theme }) => theme.colors.darkWhite};
  outline: none;
  font-size: ${({ theme }) => theme.fonts.m};
  cursor: pointer;
`;
