import React from "react";

import { StyledPaginationSelect } from "./PaginationSelect.styled";

interface PaginationSelectInterface {
  limit: number;
  setLimitValue: () => any;
}

export const PaginationSelect: React.FC<PaginationSelectInterface> = ({
  limit,
  setLimitValue,
}) => {
  return (
    <StyledPaginationSelect value={limit} onChange={setLimitValue}>
      <option value={20}>20</option>
      <option value={50}>50</option>
      <option value={100}>100</option>
      {/* <option value={1000}>Wszystkie</option> */}``
    </StyledPaginationSelect>
  );
};
