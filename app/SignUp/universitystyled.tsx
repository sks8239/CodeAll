import styled from "styled-components";

const Modal = styled.div`
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);

    .modal {
      width: 60vw;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

      .modal-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        input[type="text"] {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 8px;
        }
      
        .univ-button-container{
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 8px;
          cursor: pointer;
          overflow-y: auto; /* 스크롤 적용 */
          height: 200px;
          &:hover {
            background-color: #f0f0f0;
          }
        }
        .univ-button{
          padding: 8px 16px;
          border: none;
          background-color: #007bff;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
          margin: 1vw;
        }
        button {
          padding: 8px 16px;
          border: none;
          background-color: #007bff;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;

          &:hover {
            background-color: #0056b3;
          }
        }
      }
    }
  }
`;

export default Modal;
