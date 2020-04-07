import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const StyledWrapper = styled.button`
  height: 45px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-left: none;
  border-radius: 0 25px 25px 0;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.m};
  cursor: pointer;
`;

const SearchButton: React.FC = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <StyledWrapper onClick={handleClick}>
      <FaSearch />
    </StyledWrapper>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
