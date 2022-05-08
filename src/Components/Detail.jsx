import { DetailStyled, ButtonGenerateStyled, InnerDetailStyled, H5, H6, InnerDetailContainer } from "../Styled/DetailStyled";

const Detail = ({ dataApi, handle }) => {
  return (
  
      <DetailStyled>
        {dataApi ? (
          <div className="container">
            <div className="imageContainer">
              <img src={dataApi.image} alt={dataApi.name}></img>
            </div>
            <div className="detailContainer">
              <div className="nameContainer">
                <H5>{dataApi.name}</H5>
                <H6>Character id: {dataApi.id}</H6>
              </div>
              <InnerDetailContainer>
              <InnerDetailStyled>
                <span>Status:</span>
                {dataApi.status}
              </InnerDetailStyled>
              <hr />
              <InnerDetailStyled>
                <span>Species:</span>
                {dataApi.species}
              </InnerDetailStyled>
              <hr />
              <InnerDetailStyled>
                <span>Type:</span>
                {dataApi.type ? dataApi.type : "unknown"}
              </InnerDetailStyled>
              <hr />
              <InnerDetailStyled>
                <span>Gender:</span>
                {dataApi.gender}
              </InnerDetailStyled>
              <hr />
              <InnerDetailStyled>
                <span>Origin:</span>
                {dataApi.origin.name}
              </InnerDetailStyled>
              <hr />
              <InnerDetailStyled>
                <span>Location:</span>
                {dataApi.location.name}
              </InnerDetailStyled>
              <hr />
              <InnerDetailStyled>
                <span>Created at:</span>
                {new Date(dataApi.created)
                  .toString()
                  .split(" ")
                  .slice(0, 4)
                  .join(" ")}
              </InnerDetailStyled>
              <hr />
              </InnerDetailContainer>
            </div>
          </div>
        ) : (
          <h1>No se ha cargado ningún personaje</h1>
        )}
      
      <ButtonGenerateStyled type="button" onClick={() => handle()}>
        Generar
      </ButtonGenerateStyled>
      </DetailStyled>
   
  );
};

export default Detail;
