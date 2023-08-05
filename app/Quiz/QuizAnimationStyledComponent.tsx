import styled from "styled-components";

const QuizAnimationStyledComponent = styled.div`
  .animation-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .animation-container {
    position: absolute;
    top: 20%;
    left: 40%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
  }

  .correct-icon {
    color: green;
    font-size: 200px;
  }

  .incorrect-icon {
    color: red;
    font-size: 200px;
  }
`;


export default QuizAnimationStyledComponent;
