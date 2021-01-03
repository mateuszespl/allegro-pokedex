import styled from "styled-components";

export const StyledFilterApplyButton = styled.button`
  background: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.xs};
  border: none;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
`;
