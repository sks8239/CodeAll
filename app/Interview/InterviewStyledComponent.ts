'use client'
import styled, {keyframes} from "styled-components";
// 스타일 추가
const CommentInputContainer = styled.div`
  position: relative;
  top: 100%;
  left: -4%;
  width: 103%;
  padding: 11px 21px;
  border-top: 1px solid white; /* 수정 */
  border-radius: 0 0 20px 25px;
  margin-bottom: -50px;
`;
const UserCommentInput = styled.input`
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  width: 80%;
`;

const SubmitCommentButton = styled.button`
  position: relative;
  border: none;
  left:2%;
  background-color: #003c96;
  color: white;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
    scale:120%;
  }
`;
const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const slideUp  = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;
const InterviewWrapper = styled.div`
  .interview-question {
    position: relative;
    left: 50%;
    transform: translateX(-50%); /* 추가 */
    border-radius: 25px;
    padding: 30px;
    margin-bottom: 20px;
    font-weight: bold;
    margin-left: 20px;
    text-align: left;
    width: 50%;
    background-color: #003c96;
    color: white;
    font-size: 35px;
    display: flex;
    flex-direction: column; /* 추가 */
    align-items: flex-start; /* 추가 */
  }
  
  .question-Title{
    position: relative;
    transform: translateY(50%);
  }
  .answer-comments-container {
    position: relative;
    left: 0;
    text-align: left;
    width: 100%;
    border-radius: 29px;
    border: 2px solid #003c96;
    padding: 20px 0px; /* 수정 */
    opacity: 0;
    transform: translateY(-20px);
    animation: ${slideDown} 0.5s ease forwards;
    margin-top: auto; /* 추가 */
  }
  
  .show .answer-comments-container {
    // opacity: 0;
    // transform: translateY(-20px);
    // animation: ${slideUp} 0.5s ease forwards; /* 애니메이션 효과 추가 */
    display: block;
  }
  
  .example-answer {
    font-size: 28px;
    padding-left:20px;
    border-bottom: 1px solid white; /* 수정 */
    //border-radius: 0 0 20px 25px;
  }

  .comment {
    font-size: 20px;
    margin-top: 10px;
    padding-left:20px;
  }
  .buttons-container{
    position: relative;
    left:65%;
    display: flex;
  }


  .toggle-button {
    position: relative;
    left: 75%;
    top: 0%;
    border: none;
    background-color: transparent;
    color: white;
    font-size: 40px;
    cursor: pointer;
    transition: color 0.3s ease;
    text-align: left;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    z-index: 100;
  }

  .toggle-button:hover {
    scale: 150%;
  }
  
  .like-cnt{
    position: relative;
    left: 85%;
    border: none;
    background-color: transparent;
    color: white;
    font-size: 40px;
    cursor: pointer;
    transition: color 0.3s ease;
    text-align: left;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    z-index: 100;
  }
  .like-cnt:hover{
    scale:150%;
  }
`;

const PaginationWrapper = styled.div`
  .pagination-container {
    display: flex;
    justify-content: center;
  }

  .pagination-item {
    padding: 5px 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: white;
    cursor: pointer;
    margin-right: 5px;
    margin-bottom: 5px; /* 추가 */
  }

  .pagination-item.active {
    background-color: #3389ff;
    color: white;
  }

  .pagination-item:hover {
    background-color: #f5f5f5;
  }

  .pagination-container ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 10px;
  }
`;

export { InterviewWrapper, PaginationWrapper, CommentInputContainer,SubmitCommentButton,UserCommentInput };
