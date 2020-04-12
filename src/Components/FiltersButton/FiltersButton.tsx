import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledWrapper = styled.button``;

const FiltersButton = () => {
  return <StyledWrapper></StyledWrapper>;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersButton);
