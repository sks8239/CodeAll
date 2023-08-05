import styled from "styled-components";

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  .container{
    width:40vw;
  }
  .input::placeholder {
    color: #000;
  }
  .sign {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 50px;
    text-align: center;
  }

  .id-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 130px;
  }
  .item2 {
    display: flex;
    align-items: center;

  }
  .input {
    flex: 1; /* The input fields will now occupy an equal portion of the available space */
    height: 40px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom:20px;
  }

  .hint {
    height: 20px;
    text-align: left;
  }
  .button-container {
    position: absolute;
    left:80%;
  }
  .check_button {
    align-items: center;
    width: 110px;
    height: 40px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 15px;
    cursor: pointer;
    margin-left: 20px;
  }

  .enable_button {
    width: 100px;
    height: 40px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }

  .disable_button {
    width: 100px;
    height: 40px;
    background-color: #ccc;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: not-allowed;
  }
  .error-message {
    position: absolute;
    color: red;
    font-size: 14px;
    left:80%;
  }
  .correct-message{
    position: absolute;
    color: blue;
    font-size: 14px;
    left:80%;
  }
  /* 에러가 있을 때 입력창 스타일 */
  input.error {
    border-color: red;
  }
`;

export default SignUpWrapper;
