import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Registration from "./pages/Registration"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Nav from "./component/Nav.jsx"
import { useContext } from "react"
import { userDataContext } from "./context/UserContext.jsx"
import Collection from "./pages/Collection.jsx"
import Product from "./pages/Product.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import ProductDetail from "./pages/ProductDetail.jsx"
import Cart from "./pages/Cart.jsx"
import PlaceOrder from "./pages/PlaceOrder.jsx"
import Order from "./pages/Order.jsx"
import NotFound from "./pages/NotFound.jsx"


function App() {
  let {userData} = useContext(userDataContext)
  let location = useLocation();

  return (
    <div>
     {userData && <Nav/>}
      <Routes>

        <Route path='/login' 
        element={userData ? (<Navigate to={location.state?.from || "/"}/> ) 
        : (<Login/>)
          }/>

        <Route path='/signup' 
        element={userData ? (<Navigate to={location.state?.from || "/"}/> ) 
        : (<Registration/>)}/>

        <Route path='/' 
        element={userData ? <Home/> : <Navigate to="/login" state={{from: location.pathname}} /> }/>
      
        <Route path='/about' 
        element={userData ? <About/> : <Navigate to="/login" state={{from: location.pathname}} /> }/>

        <Route path='/collection' 
        element={userData ? <Collection/> : <Navigate to="/login" state={{from: location.pathname}} /> }/>

        <Route path='/product' 
        element={userData ? <Product/> : <Navigate to="/login" state={{from: location.pathname}} /> }/>

        <Route path='/contact' 
        element={userData ? <Contact/> : <Navigate to="/login" state={{from: location.pathname}} /> }/>

        <Route path='/productdetail/:productId' 
        element={userData ? <ProductDetail/> : <Navigate to="/login" state={{from: location.pathname}} /> }/>

        <Route path='/cart' 
        element={userData ? <Cart/> : <Navigate to="/login" state={{from: location.pathname}} /> }/>

        <Route path='/placeorder' 
        element={userData ? <PlaceOrder/> : <Navigate to="/login" state={{from: location.pathname}} /> }/>

        <Route path='/order' 
        element={userData ? <Order/> : <Navigate to="/login" state={{from: location.pathname}} /> }/>

        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </div>
  )
}

export default App
