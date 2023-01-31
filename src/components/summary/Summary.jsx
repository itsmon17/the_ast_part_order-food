import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/images/summary-background.jpg";
import SummaryInfoCard from "./SummaryInfoCard";

function Summary() {
  return (
    <Conteiner>
      <StyledImg src={BackgroundImg} alt="summary" />

      <SummaryInfoCard />
    </Conteiner>
  );
}

export default Summary;

const Conteiner = styled.div`
  position: relative;
  height: 432px;
  margin-bottom: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
`;
