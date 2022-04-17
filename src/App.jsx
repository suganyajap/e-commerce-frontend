// import "./App.css";
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHome from "./AdminPages/AdminHome";
import AdminProductEdit from "./AdminPages/AdminProductEdit";
import AdminProductList from "./AdminPages/AdminProductList";
import AdminUserList from "./AdminPages/AdminUserList";
import AdminUserEdit from "./AdminPages/AdminUserEdit";
import AdminUserAdd from "./AdminPages/AdminUserAdd";
import AdminProductAdd from "./AdminPages/AdminProductAdd";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";

function App() {
  const user=useSelector(state=>state.user.currentUser)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category/:item" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={user ? <Order /> : <Login />} />
          {/* login register pages */}

          <Route exact path="/success" element={<Success />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          

          {/* Admin page Routes*/}
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adminproductlist" element={<AdminProductList />} />
          <Route path="/adminproductedit/:id" element={<AdminProductEdit />} />
          <Route path="/adminuserlist" element={<AdminUserList />} />
          <Route path="/adminuseredit/:id" element={<AdminUserEdit />} />
          <Route exact path="/adminproductadd" element={<AdminProductAdd />} />
          <Route path="/adminuseradd" element={<AdminUserAdd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;