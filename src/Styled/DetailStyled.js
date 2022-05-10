import styled from "styled-components";
import { theme } from "./Theme";

export const DetailStyled = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    .infoContainer{    display: flex;
    flex-direction: column;
    flex-basis: 60%;
    margin-right: 20px;
    }
    .imageContainer {
      display: flex;
      flex-direction: column;
      flex-basis: 40%;
      margin-right: 20px;
      img {
        width: 100%;
        height: auto;
        min-width: 300px;
      }
    }
    .detailContainer {
     
      background-color: ${({ theme }) => theme.background};
      box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;
      transition: all 0.5s ease 0s;
      border-radius: 0.3rem;
      border-bottom: none;
      color: ${({ theme }) => theme.color};
      .nameContainer {
        border-bottom: 1px solid rgb(236, 237, 239);
        padding: 0.75rem 1.25rem;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      
      }
    }
    @media (max-width: 48em) {
      flex-direction: column;

      .imageContainer {
        width: 100%;
        flex-basis: 100%;
        img {
          width: 100%;
        }
      }
      .detailContainer {
        width: 100%;
        flex-basis: 100%;
      }
    }
  }
`;
export const InnerDetailStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    font-weight: bold;
    margin-right: auto;
  }
`;

export const ButtonGenerateStyled = styled.button`
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 12px;
  width: max-content;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.875rem 1rem;
  margin-top: 20px;
  background: linear-gradient(135deg, rgb(48, 206, 231), rgb(130, 101, 252));
  color: rgb(255, 255, 255);
  margin-left: auto;
  @media (max-width: 48em) {
    width: 100%;
  }
`;

export const InnerDetailContainer = styled.div`
  padding: 1.25rem;
  flex: 1 1 auto;
`;

export const H5 = styled.h5`

  font-size: 20px;
  font-weight: 600;
  margin: 10px 0px;
  color: ${(props) => props.status === 'Dead' ? "rgb(255, 0, 0)" : "green"};
`;

export const H6 = styled.h6`
  font-size: 0.625rem;
  text-transform: uppercase;
  margin: 4px 0px;
  font-weight: 600;
  color: ${({theme}) => theme.colorId};
`;

export const EmptyData = styled.div`
  width: 100%;
    padding: 80px;
    font-size: 30px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
`