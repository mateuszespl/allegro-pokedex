import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { setLimitValue } from "./../../store/actionsCreator";

const StyledWrapper = styled.select`
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  width: 108px;
  height: 40px;
  background: ${({ theme }) => theme.colors.lightBlack};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fonts.m};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
  cursor: pointer;
  box-shadow: 0px 1px 3px 0px ${({ theme }) => theme.colors.lightBlack};
  font-weight: 800;
  outline: none;
  text-decoration: none;
`;

export interface PaginationSelectInterface {
  limit: number;
  setLimitValue: () => any;
}

const PaginationSelect: React.FC<PaginationSelectInterface> = ({
  limit,
  setLimitValue,
}) => {
  return (
    <StyledWrapper value={limit} onChange={setLimitValue}>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
      <option value="1000">Wszystkie</option>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    limit: state.limit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLimitValue: (e) => dispatch(setLimitValue(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationSelect);
