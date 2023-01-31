import React from "react";
import styled from "styled-components";

function Button({ children, onClick, variant = "contained", ...rest }) {
  return (
    <StyledButton onClick={onClick} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;

const getBackgroundColor = (props) => {
  return props.variant === "contained" ? "#5a1f08" : "#fff";
};

const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #8a2b06";
};

const getColor = (props) => {
  return props.variant === "contained" ? "#fff" : "#8a2b06";
};

const StyledButton = styled.button`
  padding: 10px 32px;
  background: ${getBackgroundColor};
  border-radius: 30px;
  color: ${getColor};
  font-weight: 600;
  font-size: 16px;
  border: ${getBorder};
  line-height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #7e2a0a;
    color: white;
  }

  :active {
    background-color: #7e2a0a;
  }
`;
