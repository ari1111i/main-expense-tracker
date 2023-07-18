import React from "react";
import { styled } from "styled-components";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <StyledDiv>
      <StyledDiv2>{month}</StyledDiv2>
      <StyledDiv3>{year}</StyledDiv3>
      <StyledDiv4>{day}</StyledDiv4>
    </StyledDiv>
  );
};

const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

const StyledDiv2 = styled("div")`
  font-size: 0.75rem;
  font-weight: bold;
`;

const StyledDiv3 = styled("div")`
    font-size: 0.75rem;
`;

const StyledDiv4 = styled("div")`
     font-size: 1.5rem;
     font-weight: bold;
`;

export default ExpenseDate;
