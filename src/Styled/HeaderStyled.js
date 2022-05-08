import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: rgb(31, 38, 45);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;
  padding: 0px 60px;
  img{
    width: 100px;
  }
  @media( max-width: 48em) {
    padding: 0px 30px;
  }

`