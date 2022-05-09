import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Detail from "../Components/Detail";
import Header from "../Components/Header";
import History from "../Components/History";

import { MainStyled } from "../Styled/MainStyled";

const Main = () => {
  const navigate = useNavigate();
  const [dataApi, setDataApi] = useState(null);
  const history = useSelector((state) => state.history);
  const [enhancedON, setEnhancedON] = useState(false);
  return (
    <>
      <Header />
      <MainStyled>
        <Detail dataApi={dataApi} setOn={setEnhancedON} on={enhancedON}/>
        {history.length > 0 && (
          <History setData={setDataApi} on={setEnhancedON} />
        )}
      </MainStyled>
    </>
  );
};

export default Main;
