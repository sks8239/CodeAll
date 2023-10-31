import styled from "styled-components";

const ResultStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  color:white;
  margin-top: 100px;
`;

const ResultStyledBox = styled.div`
  background-color: #003C96;
  padding: 70px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  h1{
    margin-bottom: 50px;
  }
`;

const ResultStyledButtons = styled.div`
  margin-top: 10px;
  display: flex; /* Display buttons horizontally */
  justify-content: center; /* Center buttons horizontally */
  align-items: center; /* Center buttons vertically */
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    margin: 0 10px; /* Adjust margin between buttons */
    font-size: 16px;
    background-color: #ffffff;
    border: 2px solid #00a2ff;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: bold;
    &:hover {
      transform: scale(1.15);
    }

    &.active {
      border: 3px solid #ffffff;
      background-color: #00a2ff;
      transform: scale(1.3);
      color: white;
    }
  }
`;

const ResultStyledButtons2 = styled.div`
  margin-top: 20px;
  margin-left: 3vw;
  button {
    margin-right: 10px;
    border-radius: 4px;
    padding: 8px 16px;
    background-color: #e2e2e2;
    border: none;
    cursor: pointer;
  }
`;

const ResultStyledSection = styled.section`
  margin-top: 20px;
  margin-left: 0; /* Updated margin */
  margin-right: 0; /* Updated margin */
`;

const ResultStyledQuestionCard = styled.div`
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
`;

const ProblemButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* Updated alignment */
  margin-top: 10px;
  font-weight: bold;
`;

const ProblemButton = styled.div`
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

export {
  ResultStyledContainer,
  ResultStyledSection,
  ResultStyledQuestionCard,
  ResultStyledButtons,
  ResultStyledButtons2,
  ResultStyledBox,
  ProblemButton,
  ProblemButtonContainer
};
