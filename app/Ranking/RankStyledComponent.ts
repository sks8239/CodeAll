import styled from "styled-components";
import {ArrowDownCircle, ArrowUpCircle, DashCircle} from "react-bootstrap-icons";
const RankChangeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* 추가 */
`;

const RankChangeNumber = styled.span`
  margin-left: 4px;
`;
const RankStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -2vh;
  font-size :22px;
  text-align: center;
  
  .rank-table {
    width: 80%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 20px;
    text-align: center;
    margin-top: 30px;
    border-radius: 10px; /* 테이블의 모서리를 둥글게 설정 */
    overflow-y: scroll; /* 세로 스크롤만 적용 */
  }

  .rank-table th {
    background-color: #3389FF;
    color: white;
    padding: 8px;
    text-align: center;
    font-weight: bold;
    font-size : 18px;
  }

  .rank-table td {
    padding: 8px;
    text-align: center;
  }

  .rank-table .even-row {
    background-color: #f5f5f5;
  }

  .rank-table .odd-row {
    background-color: #e8e8e8;
  }

  .highlighted-row {
    background-color: yellow; /* Change to your desired highlight color */
    font-weight: bold;
    border: 2px solid red; /* Change to your desired highlight border style */
  }
`;

const RankButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: 120px;
`;

const RankButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin: 0 30px;
  font-size: 16px;
  background-color: #ffffff;
  border: 2px solid #00a2ff;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    transform: scale(1.15);
  }

  &.active {
    border: 3px solid #ffffff;
    background-color: #00a2ff;
    transform: scale(1.3);
    color: white;
  }
`;
const UpRankIcon = styled(ArrowUpCircle)`
  color: blue; /* 파란색으로 설정 */
  font-size: 24px;
  
`;

const DownRankIcon = styled(ArrowDownCircle)`
  color: red; /* 빨간색으로 설정 */
  font-size: 24px;
`;

const NotChangeIcon = styled(DashCircle)`
  color: gray; /* 회색으로 설정 */
  font-size: 24px;
`;

export { RankStyledComponent, RankButton, RankButtonContainer,UpRankIcon,DownRankIcon,NotChangeIcon, RankChangeNumber,RankChangeWrapper };
