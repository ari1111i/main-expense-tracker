import React from "react";
import { styled } from "styled-components";

const ExpensesFilter = ({ selectedYear, onSelectedYearChange }) => {
  return (
    <StyledDiv>
      <StyledDiv2>
        <StyledLabel>Filter by year:</StyledLabel>
        <StyledSelect
          value={selectedYear}
          onChange={onSelectedYearChange}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="All">All</option>
        </StyledSelect>
      </StyledDiv2>
    </StyledDiv>
  );
};

const StyledDiv = styled("div")`
  color: white;
  padding: 0 1rem;
`;

const StyledDiv2 = styled("div")`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

const StyledLabel = styled("label")`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StyledSelect = styled("select")`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`;

export default ExpensesFilter;
