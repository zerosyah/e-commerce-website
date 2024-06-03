import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory

from "./Pages/ShopCategory";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="mens" />} />
          <Route path="/womens" element={<ShopCategory category="mens" />} />
          <Route path="/kids" element={<ShopCategory category="mens" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
