import styled from 'styled-components'
const LoginWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

input {
    margin-bottom: 20px;
    padding: 8px;
    width: 300px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button {
    margin-bottom: 10px;
    padding: 8px 16px;
    width: 200px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.Login {
    margin-top : 100px;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 50px;
  }
`;
export default LoginWrapper;