import styled from "styled-components";

export const StyledFilterBox = styled.div`
  position: relative;
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      font-size: ${({ theme }) => theme.fonts.xs};
    }

    input,
    select {
      outline: none;
      width: 100%;
      margin: 5px 0 10px;
    }
  }
`;
