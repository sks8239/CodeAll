import styled from "styled-components";
import backgroundImage from "@/public/session1background.png";
import monitorImage from "@/public/monitorImage.png"
import competitionImage from "../../../resource/competition.png"
import quizman from "../../../resource/quizman.png"
const Section1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  position: relative;
  background: linear-gradient(to bottom, #3389FF, #FFFFFF);
  color : white;

  // &:before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
    //   background-image: url(${backgroundImage});
  //   background-size: 120%; 
  //   background-position: center center;
  //   opacity: 0.2; /* 배경 이미지의 투명도 설정 */
  //   z-index: -1;
  // }

  .scroll-to-section2 {
    position: absolute;
    bottom: 5%;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    //transition: transform 5s ease-in-out;
    animation: scrollAnimation 1.5s infinite;
    font-size: 30px;
  }

  @keyframes scrollAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const Section2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150vh;

  &:before {
    content: "";
    position: absolute;
    top: 10%;
    left: 50%;
    right: 0%;
    bottom: 0;
    background-image: url(${monitorImage});
    background-size: 70%;
    background-position: center;
    background-repeat: no-repeat;
    //box-shadow: -10px 0 10px rgba(0, 0, 0, 0.5);
    opacity: 1; /* 배경 이미지의 투명도 설정 */
    z-index: -1;
  }
  .section2head{
    position: absolute;
    top:20%;
    left:10%;
    font-size: 40px;
    color:black;
    font-weight: bold;
  }
`;

const Section3Wrapper = styled.div`
  background-color: rgb(252,252,252);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150vh;
  width: 100%;

  .section3head{
    position: absolute;
    top:10%;
    left:20%;
    font-size: 40px;
    color:black;
    font-weight: bold;

  }
  .cycle2head{
    position: absolute;
    top:10%;
    left:35%;
    font-size: 50px;
    color:black;
    font-weight: bold;
  }
  .cycle3head{
    position: absolute;
    top:50%;
    left:10%;
    font-size: 50px;
    color:black;
    font-weight: bold;
  }
  .cycle2-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px; /* 이미지 사이의 간격 조정 */
    margin-bottom: 50px;
  }
  .cycle1-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px; /* 이미지 사이의 간격 조정 */
  }

  /* vsImage 스타일 추가 */
  .vsImage {
    width: 20vw; /* 원하는 크기로 조정하세요 */
    left:50%;
    height: auto;
  }
  .school1 {
    width: 30vw; /* 원하는 크기로 조정하세요 */
    height: auto;
  }
  .school2 {
    width: 30vw; /* 원하는 크기로 조정하세요 */
    height: auto;
  }
  .quizman{
    width: 30vw; /* 원하는 크기로 조정하세요 */
    height: auto;
    margin-bottom: 50px;
  }
  .rankget{
    width: 30vw; /* 원하는 크기로 조정하세요 */
    height: auto;
    margin-bottom: 50px;
  }
  .section3head{
    position: absolute;
    top:20%;
    left:10%;
    font-size: 40px;
    color:black;
    font-weight: bold;
  }

`;

const Section4Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .group{
    position: absolute;
    bottom:0;
    width: 30vw;
    height: auto;
    margin-bottom: 50px;
  }
  .realInterview{
    position: absolute;
    bottom:0;
    width: 30vw;
    height: auto;
    margin-bottom: 50px;
  }
  .cycle2head{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 50px;
    color: black;
    font-weight: bold;
    text-align: center;
  }
  .cycle1head{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 50px;
    color: black;
    font-weight: bold;
  }
`;

export { Section1Wrapper, Section2Wrapper, Section3Wrapper, Section4Wrapper };
