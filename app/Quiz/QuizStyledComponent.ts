
import styled, {css, keyframes} from 'styled-components';

interface StyledButtonProps {
    selected: boolean;
}

const QuizWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3389ff;
  height: 100vh;


`;

const QuestionContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 8px 16px rgba(1, 1, 1, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 40px;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
 
  h2 {
    font-size: 32px;
    color: #2979ff;
  }
  

`;

const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 70px;
`;

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => (props.selected ? '#3f51b5' : 'white')};
  color: ${(props) => (props.selected ? 'white' : '#3f51b5')};
  border: 2px solid #2a58f4;
  border-radius: 25px;
  color: #003c96;
  padding: 10px 20px;
  margin-bottom: 10px;
  width: 50vw;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  text-align: left;

  &:hover {
    background-color: #003c96;
    color: white;
  }
`;

const ProgressBar = styled.div`
  width: 70%;
  height: 10px;
  background-color: white;
  position: absolute;
  bottom: 3%;
  border-radius: 10px;
`;



const ProgressFill = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #a5d9ff;
  border-radius: 10px;
  transition: width 0.5s linear;
`;
const TimerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0px;
  left: 50%;
  width: 50%;
  height: 5%;
  transform: translateX(-50%);
  border: 10px solid #003c96;
  border-top: none;
  padding: 10px;
  border-radius: 10px;
  //background-color: white;
  z-index: 1;
  .bugs {
    display: flex;
  }

  .bugs span {
    display: flex;
    font-size: 20px;
    margin-left: 10px;
    justify-content: center;
    margin-right: 0px;
  }

`;
const TimerText = styled.span`
  padding-right: 10px;
  font-size: 25px;
`;
const TimerBar = styled.div`
  position: absolute;
  width: 90%;
  left: 3%;
  top:60%;
  height: 30%;
  //background-color: white;
  border-radius: 10px;
  margin: 0 auto;
`;

const TimerFill = styled.div<{ timePercentage: number }>`
  width: ${(props) => props.timePercentage}%;
  height: 100%;
  background-color: darkgreen;
  border-radius: 10px;
  transition: width 0.5s linear;
`;

export { QuizWrapper, QuestionContainer, ChoicesContainer, StyledButton, ProgressFill, ProgressBar,TimerFill,TimerWrapper,TimerText,TimerBar };
