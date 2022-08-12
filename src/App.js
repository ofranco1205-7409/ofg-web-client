import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './config/routes'

import Error404 from './pages/Error404'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
