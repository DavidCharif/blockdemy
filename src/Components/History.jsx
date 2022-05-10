import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../Styled/HeaderStyled";

import {
  ButtonHistory,
  H2,
  HistoryInnerContainer,
  HistoryListStyled,
  HistoryStyled,
} from "../Styled/HistoryStyled";

const History = ({  setData, on }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useSelector((state) => state.history);
  const navigate = useNavigate()
  const handleRandomCharacter = (data) => {
    setData(data);
    console.log('setiando data')
    let main = document.querySelector("main");
    main.scrollIntoView();
    navigate(`/${data.name}`);
    on(false)
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
    let showElement = document.querySelector(".default");
    if(isOpen) {
      showElement.style.display= "none";
    } else {
      showElement.style.display= "flex";
    }
  };

  return (

      <>
        <ButtonStyled onClick={() => handleOpen()}>
          {isOpen ? "Close" : "Open"}
        </ButtonStyled>
      <HistoryStyled>
        <HistoryInnerContainer className="default show">
          {history.map((item, index) => {
            return (
              <HistoryListStyled key={index}>
                <img src={item.image} alt={item.name} />
                <div>
                  <span>{item.name}</span>
                  <ButtonHistory type="button" onClick={() => handleRandomCharacter(item)}>
                    View
                  </ButtonHistory>
                </div>
              </HistoryListStyled>
            );
          })}
        </HistoryInnerContainer>
      </HistoryStyled>
      </>
    
  );
};

export default History
