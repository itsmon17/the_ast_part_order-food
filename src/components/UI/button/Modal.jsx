import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

const Backdrop = ({ onClose }) => {
  return <StyledBackdrop onClick={onClose} />;
};

const ModalContent = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>;
};

const backdrop = document.getElementById("backdrop");
const modalContent = document.getElementById("modal-overlay");

function Modal({ children, onClose }) {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, backdrop)}
      {createPortal(<ModalContent>{children}</ModalContent>, modalContent)}
    </>
  );
}

export default Modal;

const StyledModalContent = styled.div`
  position: fixed;
  top: 26%;
  left: 28%;
  width: 44%;

  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

`;

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
