import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../../UI/button/Button";
import { ReactComponent as PlysIcons } from "../../../assets/icons/plusAdd.svg";
import { BasketContext } from "../../../store/BasketContext";

function MialItemForm({ id, title, price }) {
  const { addToBasket } = useContext(BasketContext);

  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const basketItem = {
      id,
      price,
      title,
      amount,
    };

    addToBasket(basketItem);
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <IputContiner>
        <label htmlFor={id}>Amount</label>
        <input
          value={amount}
          onChange={amountChangeHandler}
          min={1}
          max={5}
          type="number"
          id={id}
          defaultValue={1}
        />
      </IputContiner>
      <Button>
        <StyledIcon /> Add
      </Button>
    </StyledForm>
  );
}

export default MialItemForm;

const StyledIcon = styled(PlysIcons)`
  margin-right: 10px;
`;

const IputContiner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin-right: 20px;
  }

  input {
    box-sizing: border-box;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    width: 60px;
    outline: none;
    padding: 4px 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
