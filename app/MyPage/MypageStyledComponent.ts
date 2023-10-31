import styled from "styled-components";

const MyPageStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8vw;
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

  .input {
    width: 300px;
    height: 40px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .hint {
    height: 20px;
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
    width: 117px;
    height: 40px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  .enable_button2 {
    width: 117px;
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
`;

export default MyPageStyledComponent;