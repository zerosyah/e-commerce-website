import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import { BrowserRoute, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path=/mens' element={<ShopCategory />} />
          <Route path='/womens' element={<ShopCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
