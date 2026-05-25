import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from './pages/User/landing'
import Main from './pages/User/main'
import Products from './pages/User/products'
import PaintCalculotorpage from './pages/User/paintCalculotorpage'
import BrandPage from './pages/User/brandPage'

import Card from './pages/User/card'
import Colorpreview from './pages/User/colorpreview'
import Offer from './pages/User/offer'
import Contact from './components/contact'
import Shop from './pages/User/shop'
import Profile from './components/profile'
import Wishlist from './pages/User/wishlist'
import Addtocart from './pages/User/addtocart'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position={"top-center"}
        reverseOrder={false}
        toastOptions={{
          duration: 3000,

          style: {
            background: "#111827",
            color: "#fff",
            borderRadius: "16px",
            padding: "12px 16px",
            fontSize: "14px",
            fontWeight: "500",
          },

          success: {
            style: {
              background:
                "linear-gradient(135deg, #7c3aed, #ec4899)",
            },
          },

          error: {
            style: {
              background:
                "linear-gradient(135deg, #ef4444, #f97316)",
            },
          },

          loading: {
            style: {
              background:
                "linear-gradient(135deg, #2563eb, #06b6d4)",
            },
          },
        }}
      />
      <Routes>

        <Route path='/' element={<Landing />}>
          <Route index element={<Main />} />

          <Route path='paintcalculator' element={<PaintCalculotorpage />} />

          <Route path='categories' element={<Products />}>
            <Route index element={<Card />} />
            <Route path='interior' element={<h1>Interior Paints</h1>} />
            <Route path='exterior' element={<h1>Exterior Paints</h1>} />
            <Route path='primers' element={<h1>Primers</h1>} />
            <Route path='wood-finish' element={<h1>Wood Finish</h1>} />
            <Route path='waterproofing' element={<h1>Waterproofing</h1>} />
          </Route>

          <Route path='brands' element={<BrandPage />} />
          <Route path="colorpreview" element={<Colorpreview />} />
          <Route path='offers' element={<Offer />} />
          <Route path='contact' element={<Contact />} />
          <Route path='shop' element={<Shop />} />
          <Route path='profile' element={<Profile />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='addtocart' element={<Addtocart />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App