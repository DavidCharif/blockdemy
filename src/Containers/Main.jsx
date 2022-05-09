import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Detail from '../Components/Detail'
import Header from '../Components/Header'
import History from '../Components/History'
import { randomNumber } from '../Helpers/randomNumber'
import { GET_CHARACTER } from '../Querys/GET_CHARACTER'
import { MainStyled } from '../Styled/MainStyled'

const Main = () => {
  const navigate = useNavigate()
  const [dataApi, setDataApi] = useState(null)
  const [history, setHistory] = useState([])
  const [idApi, setIdApi] = useState(randomNumber())
  const { loading, data } = useQuery(GET_CHARACTER, {
    variables: {
      id: idApi
    },
  });

  const HandleClick = () => {  

  setIdApi(randomNumber())
  setDataApi(data.character)
  setHistory([ data.character, ...history ])
  navigate(`/${data.character.name}`)
  }
  
  return (
    <>
    <Header/>
<MainStyled>
    <Detail idApi={idApi} handle={HandleClick} loading={loading}/>  
    {history.length > 0 && <History history={history} setData={setDataApi}/>}
</MainStyled>
</>
  );
}

export default Main