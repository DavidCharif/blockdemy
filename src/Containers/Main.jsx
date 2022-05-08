import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import Detail from '../Components/Detail'
import Header from '../Components/Header'
import History from '../Components/History'
import { randomNumber } from '../Helpers/randomNumber'
import { GET_CHARACTER } from '../Querys/GET_CHARACTER'
import { MainStyled } from '../Styled/MainStyled'

const Main = () => {
  const [dataApi, setDataApi] = useState(null)
  const [history, setHistory] = useState([])
  const [idApi, setIdApi] = useState(randomNumber())
  const {  data } = useQuery(GET_CHARACTER, {
    variables: {
      id: idApi
    },
  });

  const handleClick = () => {  
  setIdApi(randomNumber())
  setDataApi(data.character)
  setHistory([ data.character, ...history ])
  }
  
  return (
    <>
    <Header/>
<MainStyled>
    <Detail dataApi={dataApi} handle={handleClick}/>  
    {history.length > 0 && <History history={history} setData={setDataApi}/>}
</MainStyled>
</>
  );
}

export default Main