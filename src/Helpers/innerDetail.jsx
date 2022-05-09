import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  InnerDetailStyled,
  H5,
  H6,
  InnerDetailContainer,
} from "../Styled/DetailStyled";
import { add } from "./historySlice";

import Spinner from "./Spinner";

function InnerDetail({ data }) {
  
  const character = data.character?? data;
  const history = useSelector((state) => state.history);
  const dispatch = useDispatch();
  console.log('history', history)

  if (data.loading) {
    return <Spinner />;
  } else {
    if(!history.includes(character)){
      dispatch(add(character))
    }
  }
  if (data.error) {
    return <div>Error</div>;
  } 
  return (
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
  );
}

export default InnerDetail;
