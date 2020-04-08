import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledWrapper = styled.section``;

const FiltersSection = () => {
  return (
    <StyledWrapper>
      <select name="" id=""></select>
      <select name="" id=""></select>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersSection);
