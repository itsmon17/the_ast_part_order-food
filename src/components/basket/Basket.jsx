import React, { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../UI/button/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

function Basket({ onClose }) {
  const { items, updateBasketItem, deleteBasketItem } = useContext(BasketContext);

  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  };

  const decrementAmount = (id, amount) => {
    if (amount > 1) {
      updateBasketItem({ amount: amount - 1, id });
    } else{
      deleteBasketItem(id)
    }
  };

  const incrementAmount = (id, amount ) => {
    updateBasketItem({amount: amount + 1, id})
  }

  return (
    <Modal onClose={() => {}}>
      <Content>
        {items.length ? (
          <FixedWidthConteiner>
            {items.map((item) => {
              return (
                <BasketItem
                  key={item._id}
                  incrementAmount={() =>  incrementAmount(item._id, item.amount)}
                  decrementAmount={() => decrementAmount(item._id, item.amount)}
                  title={item.title}
                  prise={item.price}
                  amount={item.amount}
                />
              );
            })}
          </FixedWidthConteiner>
        ) : null}
        <TotalAmount prise={getTotalPrice()} onClose={onClose}></TotalAmount>
      </Content>
    </Modal>
  );
}

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;

const FixedWidthConteiner = styled.div`
  overflow-y: auto;
  max-height: 228px;
`;
