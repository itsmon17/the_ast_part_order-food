import React from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";

function TotalAmount({ prise, onOrder, onClose }) {
  const orderButton =
    prise > 0 ? <Button onClick={onOrder}>Order</Button> : null;

  const fixedPrise = prise.toFixed(2);

  return (
    <div>
      <InfoConteiner>
        <Label>Total Amount</Label>
        <Prise>${fixedPrise}</Prise>
      </InfoConteiner>
      <ActionButtonConteiner>
        <Button variant="outlined" onClick={onClose} className="close">
          Close
        </Button>
        {prise > 0 && orderButton}
      </ActionButtonConteiner>
    </div>
  );
}

export default TotalAmount;

const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
`;

const Prise = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
`;

const InfoConteiner = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const ActionButtonConteiner = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  .close {
    animation: close 300ms ease-out;
  }

  @keyframes close {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-3rem);
    }
  }
`;
