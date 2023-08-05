'use client'
import styled from "styled-components";
import monitorImage from "../../../public/monitorImage.png"
const Section1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  position: relative;
  background: linear-gradient(to bottom, #3389FF, #FFFFFF);
  color : white;



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
  background-color:white;
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

  .section2head {
    position: absolute;
    top: 20%;
    left: 10%;
    font-size: 40px;
    color: black;
    font-weight: bold;
  }
`;

const Section3Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150vh;
  background-color : #F4F7FC;
      // &:before {
      //   content: "";
      //   position: absolute;
      //   top: 10%;
      //   left: 50%;
      //   right: 0%;
      //   bottom: 0;
      //   background-image: url
      //   background-size: 120%;
      //   background-position: center;
      //   background-repeat: no-repeat;
      //   //box-shadow: -10px 0 10px rgba(0, 0, 0, 0.5);
      //   opacity: 0.7; /* 배경 이미지의 투명도 설정 */
      //   z-index: -1;
      // }
  
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
  background-color: white;
`;

export { Section1Wrapper, Section2Wrapper, Section3Wrapper, Section4Wrapper };
