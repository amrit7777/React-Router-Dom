import { Route, Routes } from 'react-router-dom'
// import About from './Components/About'
import React from 'react'
import Admin from './Components/Admin'
import { AuthProvider } from './Components/Auth'
import FeaturedProduct from './Components/FeaturedProduct'
import Home from './Components/Home'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import NewProduct from './Components/NewProduct'
import NoMatch from './Components/NoMatch'
import OrderSummary from './Components/OrderSummary'
import Products from './Components/Products'
import Profile from './Components/Profile'
import RequireAuth from './Components/RequireAuth'
import User from './Components/User'
import UserDetails from './Components/UserDetails'
const LazyAbout=React.lazy(()=>import('./Components/About'))

function App() {


  return (
    <>
    <AuthProvider>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='about' element={<React.Suspense fallback='Loading ...'><LazyAbout/></React.Suspense>}></Route>
    <Route path='order-summary' element={<OrderSummary/>}></Route>
    <Route path='products' element={<Products/>}>
      <Route index element={<FeaturedProduct/>}/>
      <Route path='featured' element={<FeaturedProduct/>}/>
      <Route path='new' element={<NewProduct/>}/>

    </Route>
    <Route path='users' element={<User/>}>
    <Route path=':userId' element={<UserDetails/>}/>
    <Route path='admin' element={<Admin/>}/>
    </Route>
    <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>}/>
    <Route path='login' element={<Login/>}/>
    <Route path="*" element={<NoMatch/>}></Route>
   </Routes>
   </AuthProvider>
   </>
  )
}

export default App
