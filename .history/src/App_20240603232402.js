import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Shop from './Pages/Shop';
import Shop
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory />} />
          <Route path='/womens' element={<ShopCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
