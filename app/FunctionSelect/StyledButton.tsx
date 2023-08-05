import React from 'react';
import styled from "styled-components";

interface StyledButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  top:300px;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f5f8;
  transition: background-color 0.3s ease-in-out;
  border: none;
  outline: none;
  font-size: 30px;
  cursor: pointer;
  border-radius: 10px;
  transform: scale(1);
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  font-weight: bold;

  &:hover {
    background-color: #d3d3d3;
    transform: scale(1.10);
    z-index: 100;
  }

  .hover-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    background-color: #f1f5f8;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 100;
  }

  &:hover .hover-content {
    opacity: 1;
      font-size : 15px;
  }
`;

export default StyledButton;
