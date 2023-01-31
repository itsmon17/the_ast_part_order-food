import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcons } from "../../assets/icons/basket-icons.svg";

function BasketButton({ count, ...restProps }) {
  return (
    <StyledButton {...restProps}>
      <BasketIcons />
      <StyledTitle>Your Cart</StyledTitle>
      <StyledCount id="counter"> {count || 0} </StyledCount>
    </StyledButton>
  );
}

export default BasketButton;

const StyledButton = styled.button`
  padding: 8px 32px;
  background: #5a1f08;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  line-height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;

`;

const StyledTitle = styled.span`
  margin-left: 12px;
  margin-right: 24px;
`;

const StyledCount = styled.span`
  background-color: #8a2b06;
  color: #ffffff;
  border-radius: 30px;
  padding: 4px 16px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
`;
