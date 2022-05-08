import styled from "styled-components";

export const HistoryStyled = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  `;
export const HistoryListStyled = styled.div`
  
  display: flex;
  flex-direction: row;
  div {
    justify-content: space-between;
    padding: 1.25rem;
    flex: 1 1 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    span{

      font-size: 22px;
    }
  }
  img {
    width: 80px;
  }
  &:hover {
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
  }
`;
export const H2 = styled.h2`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 25px;
`;
export const ButtonHistory = styled.button`
  padding: 0.625rem 1.25rem;
  border: 1px solid rgb(130, 101, 252);
  color: rgb(130, 101, 252);
  background: none;
  margin-top: 0px;
  background-color: transparent;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: rgb(130, 101, 252);
    color: white;
  }
  
`;