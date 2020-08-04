import styled from "styled-components";

export const AddAbsenceStyle = styled.div`
  display: flex;
  flex-direction: column;
  .add-holiday-button {
    width: auto;
    align-self: flex-end;
    background-color: white;
    color: #6b6b6b;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    border: 1px solid #cccccc;
    outline-style: none;
    cursor: pointer;
    margin: 30px 30px 0 0 ;
  }
  .add-holiday-button:active {
    box-shadow: inset -2px 2px 15px 10px rgba(204, 204, 204, 1);
  }
  .title{
    font-weight: 700;
    font-size: 18px;
  }
  .type-of-absence{
    align-self: center;
  }

  .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: #fff;
    background: #cc2f37;
    border-color: #cc2f37;
}
.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
  color: #cc2f37;
    background: #cccccc;
    border-color: #cccccc;
}
.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active {
  color: #fff;
    background: #cc2f37;
    border-color: #cc2f37;
}
`;
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  .modal-main {
    position: fixed;
    background: white;
    width: 400px;
    padding: 2.5%;
    height: auto;
    top: 50%;
    left: 50%;
    transition: all 0.5s linear;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    .modal-header {
      font-size: 22px;
      font-weight: 700;
      color: #cc2f37;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }


`;
