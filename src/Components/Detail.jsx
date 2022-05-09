import Spinner from "../Helpers/Spinner";
import { graphql } from '@apollo/client/react/hoc';

import {
  DetailStyled,
  ButtonGenerateStyled,
  InnerDetailStyled,
  H5,
  H6,
  InnerDetailContainer,
  EmptyData
} from "../Styled/DetailStyled";
import { GET_CHARACTER } from "../Querys/GET_CHARACTER";
import { useState } from "react";

function InnerDetail({data: {character}}) {
  return(
    <div className="container">
          <div className="imageContainer">
            <img src={character.image} alt={character.name}></img>
          </div>
          <div className="infoContainer">
            <div className="detailContainer">
              <div className="nameContainer">
                <H5>{character.name}</H5>
                <H6>Character id: {character.id}</H6>
              </div>
              <InnerDetailContainer>
                <InnerDetailStyled>
                  <span>Status:</span>
                  {character.status}
                </InnerDetailStyled>
                <hr />
                <InnerDetailStyled>
                  <span>Species:</span>
                  {character.species}
                </InnerDetailStyled>
                <hr />
                <InnerDetailStyled>
                  <span>Type:</span>
                  {character.type ? character.type : "unknown"}
                </InnerDetailStyled>
                <hr />
                <InnerDetailStyled>
                  <span>Gender:</span>
                  {character.gender}
                </InnerDetailStyled>
                <hr />
                <InnerDetailStyled>
                  <span>Origin:</span>
                  {character.origin.name}
                </InnerDetailStyled>
                <hr />
                <InnerDetailStyled>
                  <span>Location:</span>
                  {character.location.name}
                </InnerDetailStyled>
                <hr />
                <InnerDetailStyled>
                  <span>Created at:</span>
                  {new Date(character.created)
                    .toString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ")}
                </InnerDetailStyled>
                <hr />
              </InnerDetailContainer>
            </div>
          </div>
        </div>
  )
}


const Detail = ({ idApi, handle, loading }) => {
  const [data, setData] = useState(false);
  
  const HOCComponet = graphql(GET_CHARACTER, {
    options: {
      variables: {
        id: idApi
      }
    }        
  })(InnerDetail);

  return (
    <DetailStyled>
      {data ? (
        <HOCComponet/>
      ) : (
        <EmptyData>
        No se ha cargado ningún personaje
        </EmptyData>
      )}

      {loading ? (
        <Spinner />
      ) : (
        <ButtonGenerateStyled type="button" onClick={() => handle()}>
          Generate
        </ButtonGenerateStyled>
      )}
    </DetailStyled>
  );
};

export default Detail
