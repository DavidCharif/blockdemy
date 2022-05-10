import React, { useState } from "react";

import Detail from "../Components/Detail";
import Header from "../Components/Header";

import { MainStyled } from "../Styled/MainStyled";

const Main = () => {
  const [dataApi, setDataApi] = useState(null);

  const [enhancedON, setEnhancedON] = useState(false);
  return (
    <>
      <Header setData={setDataApi} on={setEnhancedON} />
      <MainStyled>
        <Detail dataApi={dataApi} setOn={setEnhancedON} on={enhancedON} />
      </MainStyled>
    </>
  );
};

export default Main;
