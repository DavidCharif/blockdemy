import {
  DetailStyled,
  ButtonGenerateStyled,
  EmptyData,
} from "../Styled/DetailStyled";
import { GET_CHARACTER } from "../Querys/GET_CHARACTER";
import { useState } from "react";
import { randomNumber } from "../Helpers/randomNumber";
import InnerDetail from "../Helpers/innerDetail";
import { graphql } from "@apollo/client/react/hoc";

const Detail = ({ dataApi, setOn, on }) => {
  const [data, setData] = useState(false);
  const [idApi, setIdApi] = useState(randomNumber());
  const query = graphql(GET_CHARACTER, {
    options: {
      variables: {
        id: idApi,
      },
    },
  });

  const handleClick = () => {
    setData(true);
    setIdApi(randomNumber());
    setOn(true);
  };
  const Enhaced = query(InnerDetail);

  return (
    <DetailStyled>
      {data ? (
        on ? (
          <Enhaced />
        ) : (
          <InnerDetail data={dataApi} />
        )
      ) : (
        <EmptyData>No se ha cargado ningún personaje</EmptyData>
      )}

      <ButtonGenerateStyled type="button" onClick={() => handleClick()}>
        Generate
      </ButtonGenerateStyled>
    </DetailStyled>
  );
};

export default Detail;
