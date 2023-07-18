import React from "react";
import ExpenseDate from "./ExpenseDate";
import Button from "../UI/button/Button";
import { styled } from "styled-components";

const ExpenseItem = ({ date, title, amount, onDeleteExpense, id }) => {
  return (
    <StyledCard>
      <ExpenseDate date={date} />
      <StyledDiv>
        <StyledH2>{title}</StyledH2>
        <StyledDiv1>${amount}</StyledDiv1>{" "}
      </StyledDiv>
      <Button
        style={{ marginLeft: "1rem" }}
        onClick={() => {
          onDeleteExpense(id);
        }}
      >
        Delete
      </Button>
    </StyledCard>
  );
};

const StyledCard = styled("Card")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
`;

const StyledDiv = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;
`;

const StyledH2 = styled("h2")`
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  color: white;
`;

const StyledDiv1 = styled("div")`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;

  ${props => 
	props.isMediaQuery && ` 
	  (min-width: 580px) { 
	  flex-direction: row; 
	  align-items: center; 
	  justify-content: flex-start; 
	 } 
	` 
   } 
`;
 



export default ExpenseItem;
