import React from "react";
import styled from "styled-components";

function SummaryInfoCard() {
  return (
    <Card>
      <StyledTitle>Delicious Food, Delivered To You</StyledTitle>
      <PText1>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious
        <br /> lunch or dinner at home.
      </PText1>
      <PText1>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by
        <br /> experienced chefs!
      </PText1>
    </Card>
  );
}

export default SummaryInfoCard;

const Card = styled.div`
  max-width: 53.375rem;
  background-color: #383838;
  padding: 1.5rem;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  position: absolute;
  margin-top: 26rem;
  color: white;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

const StyledTitle = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
`;

const PText1 = styled.p`
  margin-top: 28px;
  margin-bottom: 10px;
`;
