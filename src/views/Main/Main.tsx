import React from "react";

import FilterList from "components/FilterList";
import DisplaySection from "components/Wrappers/DisplaySection";
import SearchSection from "components/Wrappers/SearchSection";
import { StyledMain } from "./Main.styled";

export const Main: React.FC = () => {
  return (
    <StyledMain>
      <SearchSection />
      <FilterList />
      <DisplaySection />
    </StyledMain>
  );
};
