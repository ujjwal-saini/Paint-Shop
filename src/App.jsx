import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/User/landing'
import Main from './pages/User/main'
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
import Chat from './components/chat'
import AllColorTemplate from './components/colors/allcolortemplate'
import Landingadmin from './pages/Admin/landingadmin'
import MainAdmin from './pages/Admin/mainAdmin'
import Users from './pages/Admin/users'
import Colorshades from './pages/Admin/colorshades'
import Orders from './pages/Admin/orders'
import Analytics from './pages/Admin/analytics'
import Productsadmin from './pages/Admin/products'
import UserDetails from './pages/Admin/components/userDetails'
import Addproducts from './pages/Admin/addproducts'
import AddProducts from './pages/Admin/addproducts'
import CategoryPage from './pages/User/categoryPage'
import ProductDetail from './pages/User/productDetail'

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
        }} />

      <Routes>
        <Route path='/' element={<Landing />}>
          <Route index element={<Main />} />
          <Route path='Features/paintcalculator' element={<PaintCalculotorpage />} />
          <Route path='categories' element={<CategoryPage />} />
          <Route path='categories/:id' element={<ProductDetail />} />
          <Route path='brands' element={<BrandPage />} />
          <Route path='Features/colorpreview' element={<Colorpreview />} />
          <Route path='Features/AllColorTemplate' element={<AllColorTemplate />} />
          <Route path='offers' element={<Offer />} />
          <Route path='contact' element={<Contact />} />
          <Route path='shop' element={<Shop />} />
          <Route path='profile' element={<Profile />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='addtocart' element={<Addtocart />} />
          <Route path='chat' element={<Chat />} />
        </Route>
        {/* admin */}
        <Route path='dashboard' element={<Landingadmin />} >
          <Route index element={<MainAdmin />} />
          <Route path='users' element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path='paintshades' element={<Colorshades />} />
          <Route path='orders' element={<Orders />} />
          <Route path='products' element={<Productsadmin />} />
          <Route path='products/addProducts' element={<AddProducts />} />
          <Route path='analytics' element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App