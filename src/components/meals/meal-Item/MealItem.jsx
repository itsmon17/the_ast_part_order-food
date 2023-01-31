import React from "react";
import styled from "styled-components";
// import { BasketContext } from "../../../store/BasketContext";

import MialItemForm from "./MialItemForm";

function MealItem({ id, title, description, price }) {
  return (
    <StyledItem>
      <StyledItemInfo>
        <StyledTitle>{title}</StyledTitle>
        <p>{description}</p>
        <span>${price}</span>
      </StyledItemInfo>
      <>
        <MialItemForm id={id} price={price} title={title}></MialItemForm>
      </>
    </StyledItem>
  );
}

export default MealItem;

const StyledItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  margin-bottom: 20px;

  :last-child {
    border: none;
    margin-bottom: -10px;
  }
`;

const StyledItemInfo = styled.div`
  margin-bottom: 20px;

  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
  }

  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ad5502;
    margin-top: 4px;
  }
`;

const StyledTitle = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
`;
