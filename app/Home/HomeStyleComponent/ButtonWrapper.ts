'use client'
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const DownloadButtonStyle = styled.button`
  padding: 0px 40px;
  margin-right: 100px;
  background-color: rgba(0, 12, 30, 0.7);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
    
  p{
    font-size: 20px;
    font-weight: bold;
  }
  &:hover{
    background-color: rgb(78,89,104);
  }
  .download-icon {
    position: relative;
    left: -5%;
    top: 100%;
    margin-right: 8px; /* 아이콘과 텍스트 사이의 간격 설정 */
  }
`;

const WebButtonStyle = styled.button`
  padding: 15px 40px;
  background-color: rgba(0, 12, 30, 0.7);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover{
    background-color: rgb(78,89,104);
  }
`;

export {ButtonWrapper, WebButtonStyle, DownloadButtonStyle};