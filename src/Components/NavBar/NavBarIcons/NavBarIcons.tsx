import React from "react";
import { FaFilter } from "react-icons/fa";

import { StyledNavBarIcons } from "./NavBarIcons.styled";

interface NavBarIconsInterface {
  setFilterSectionVisibility: () => void;
}

export const NavBarIcons: React.FC<NavBarIconsInterface> = ({
  setFilterSectionVisibility,
}) => {
  return (
    <StyledNavBarIcons>
      <button onClick={() => setFilterSectionVisibility()}>
        <FaFilter />
      </button>
    </StyledNavBarIcons>
  );
};
