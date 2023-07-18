import React from "react";
import { styled } from "styled-components";

const ChartBar = ({ label, value, totalMax }) => {
  let barFillHeight = "0%";
  if (totalMax > 0) {
    barFillHeight = Math.round((value / totalMax) * 100) + "%";
  }

  return (
    <StyledDiv>
      <StyledDiv2>
        <StyledDiv3 style={{ height: barFillHeight }}></StyledDiv3>
      </StyledDiv2>
      <StyledLabel>{label}</StyledLabel>
    </StyledDiv>
  );
};

const StyledDiv = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDiv2 = styled("div")`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledDiv3 = styled("div")`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
`;

const StyledLabel = styled("label")`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;

export default ChartBar;
