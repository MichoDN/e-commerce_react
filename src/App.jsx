import React, { useEffect } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"

//Pages
import ProtectedRoutes from "./components/ProtectedRoutes"
import ProductDetail from "./pages/ProductDetail"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Purchases from "./pages/Purchases"

//Comps
import Header from "./components/Header"
import LoadingScreen from "./components/LoadingScreen"
import Cart from "./components/Cart"

//Redux
import { useDispatch, useSelector } from "react-redux"
import { getProductsThunk } from './store/slices/products.slice'
import { getCategoriesThunk } from "./store/slices/categories.slice"
import { toggleIsLogged } from "./store/slices/isLogged.slice"
import { getCartThunk } from "./store/slices/cartProducts.slice"

function App() {
  const dispatch = useDispatch()
  const isLogged = useSelector(state => state.isLogged)
  const isLoading = useSelector(state => state.isLoading)

  useEffect(() => {
    dispatch(getProductsThunk())
    dispatch(getCategoriesThunk())

    if (localStorage.getItem("token")) dispatch(toggleIsLogged(false))
    else dispatch(toggleIsLogged(true))
  }, [])

  useEffect(() => {if (isLogged === true) dispatch(getCartThunk())}, [isLogged])

  return (
    <HashRouter>

      <Header />
      {isLoading && <LoadingScreen />}
      <Cart/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store" element={<Store />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
