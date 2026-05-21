import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from './pages/User/landing'
import Main from './pages/User/main'
import Products from './pages/User/products'
import PaintCalculotorpage from './pages/User/paintCalculotorpage'
import BrandPage from './pages/User/brandPage'

import Card from './pages/User/card'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Landing />}>

          <Route index element={<Main />} />

          <Route path='paintcalculator' element={<PaintCalculotorpage />} />

          <Route path='products' element={<Products />}>
            <Route index element={<Card />} />
            <Route path='interior' element={<h1>Interior Paints</h1>} />
            <Route path='exterior' element={<h1>Exterior Paints</h1>} />
            <Route path='primers' element={<h1>Primers</h1>} />
            <Route path='wood-finish' element={<h1>Wood Finish</h1>} />
            <Route path='waterproofing' element={<h1>Waterproofing</h1>} />
          </Route>

          <Route
            path='brands'
            element={<BrandPage />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App