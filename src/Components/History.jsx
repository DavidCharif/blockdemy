import React from 'react'

import { ButtonHistory, H2, HistoryListStyled, HistoryStyled } from '../Styled/HistoryStyled'

const History = ({history, setData}) => {
  const handle = (data) => {
    setData(data)
    let main = document.querySelector('main')
    main.scrollIntoView({behavior: 'smooth'})
    

  }
  return (
    <>
      <H2>History</H2>
    <HistoryStyled>
     
        {history.map((item, index) => {
          return (
            <HistoryListStyled key={index}>
              <img src={item.image} alt={item.name} />
              <div>
              <span>{item.name}</span>            
              <ButtonHistory type='button' onClick={() => handle(item)}>View</ButtonHistory>
              </div>
            </HistoryListStyled>
          )
        })}
     
    </HistoryStyled>
    </>
  )
}

export default History