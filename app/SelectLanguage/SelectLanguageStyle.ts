'use client'
import styled, {css} from "styled-components";



const SelectLanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px; /* 테두리를 둥글게 */
  padding: 20px;
  background-color: #f1f5f8;
  margin: 100px auto; /* 중앙에 위치하도록 수정 */
  width: 700px;
  height: 200px;
  
`;

const LanguageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LanguageButton = styled.button`
  padding: 10px 20px;
  margin-left: 20px;
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: #ffffff;
  border: 2px solid #00a2ff;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width:120px;
  height:40px;
  &:hover {
    transform: scale(1.15); /* 호버시 크기가 커지도록 추가 */
  }

  &.selected {
    border: 3px solid #ffffff;
    background-color: #00a2ff; /* 하늘색보다 조금 더 옅은 색으로 변경 */
    color : white;
    transform: scale(1.15); /* 호버시 크기가 커지도록 추가 */
  }
  &.active{
    border: 3px solid #ffffff;
    background-color: #00a2ff; /* 하늘색보다 조금 더 옅은 색으로 변경 */
    color : white;
    transform: scale(1.15); /* 호버시 크기가 커지도록 추가 */
  }
`;

const StartButton = styled.button`
  position: absolute;
  right: 50vh;
  margin-top: 20px;
  padding: 20px 40px;
  background-color: #f1f5f8;
  border: 2px solid #f0f7ff;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #d3d3d3;
    border: 2px solid #00a2ff;
    transform: scale(1.07); /* 호버시 크기가 커지도록 추가 */
  }
`;

export { SelectLanguageContainer, LanguageContainer, LanguageButton, StartButton };
