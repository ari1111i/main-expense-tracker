import React from "react";
import { styled } from "styled-components";

const Card = (props) => {
  const classes = "card " + props.className;
  return <StyledDiv className={classes}>{props.children}</StyledDiv>;
};

const StyledDiv = styled("div")`
border-radius: 12px;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);`;

export default Card;
