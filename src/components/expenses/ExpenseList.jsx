import React from "react";
import ExpenseItem from "./ExpenseItem";
import { styled } from "styled-components";

const ExpenseList = ({ expenses = [], onDeleteExpense }) => {
  return (
    <div>
      {expenses.length === 0 && (
        <StyledH1>No Expenses</StyledH1>
      )}
      {expenses.length > 0 && (
        <StyledUl>
          {expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                onDeleteExpense={onDeleteExpense}
                date={expense.date}
                title={expense.title}
                id={expense.id}
                amount={expense.amount}
              />
            );
          })}
        </StyledUl>
      )}
    </div>
  );
};

const StyledUl = styled("ul")`
  color: white;
  text-align: center;
`;

const StyledH1 = styled("H1")`
  list-style: none;
  padding: 0;
`;

export default ExpenseList;
