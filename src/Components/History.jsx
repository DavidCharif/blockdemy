import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ButtonHistory,
  H2,
  HistoryInnerContainer,
  HistoryListStyled,
  HistoryStyled,
} from "../Styled/HistoryStyled";

const History = ({ history, setData }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate()
  const handleRandomCharacter = (data) => {
    setData(data);
    let main = document.querySelector("main");
    main.scrollIntoView();
    navigate(`/${data.name}`);
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
      <H2>History</H2>
      <HistoryStyled>
        <button onClick={() => handleOpen()}>
          {isOpen ? "Close" : "Open"}
        </button>
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
