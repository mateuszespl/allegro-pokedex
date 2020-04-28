import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { setLimitValue } from "./../../store/actionsCreator";

const StyledWrapper = styled.select`
  display: block;
  font-size: ${({ theme }) => theme.fonts.m};
  height: 40px;
  font-family: sans-serif;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  box-sizing: border-box;
  margin: 0 10px;
  box-shadow: 0px 1px 3px 0px ${({ theme }) => theme.colors.lightBlack};
  border-radius: 20px;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23999%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(
      to bottom,
      rgba(30, 30, 30, 0.3) 100%,
      rgba(30, 30, 30, 0.3) 100%
    );
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  outline: none;
  cursor: pointer;

  ::-ms-expand {
    display: none;
  }
  option {
    font-weight: normal;
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fonts.s};
  }

  ${({ theme }) => theme.media.mobile} {
    margin: unset;
    height: 30px;
  }
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
      <option value={20}>20</option>
      <option value={50}>50</option>
      <option value={100}>100</option>
      {/* <option value={1000}>Wszystkie</option> */}
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
