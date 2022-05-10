import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Containers/Main'

const LocalRoutes = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Main />} />     
      <Route path="/:name" element={<Main />} />
    </Routes>
  )
}

export default LocalRoutes