import styled from 'styled-components';

export const HeaderStyled = styled.nav`
  background-color: ${({ theme }) => theme.header};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 60px;
  img{
    width: 100px;
  }
  @media( max-width: 48em) {
    padding: 0px 30px;
  }

`

export const ButtonStyled = styled.button`
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  padding: 0.5rem 1.25rem;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.color};
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
    color: ${({ theme }) => theme.colorHover};
  }

`