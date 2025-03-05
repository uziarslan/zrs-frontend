import "./App.css";
import "./Assets/css/styles.css";
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom"; // Remove Router import
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Sell from "./Pages/Sell";
import SellCarConfirm from "./Pages/SellCarConfirm";
import FinanceConfirm from "./Pages/FinanceConfirm";
import Finance from "./Pages/Finance";
import Contact from "./Pages/Contact";
import TestDriveF from "./Pages/TestDriveForm";
import TestDriveConfirm from "./Pages/TestDriveConfirm";
import TestDrive from "./Pages/TestDrive";
import Car from "./Pages/Car";
import Buy from "./Pages/Buy";
import { AuthContext } from "./Context/AuthContext";
import Loader from "./Components/Loader";
import AllBlogs from "./Pages/AllBlogs";
import Blog from "./Pages/Blog";
import BuyNow from "./Pages/BuyNow";
import BuyNowConfirm from "./Pages/BuyNowConfirm";
import Liked from "./Pages/Liked";

function App() {
  const { isLoading } = useContext(AuthContext);

  return (
    <div className="App">
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/sell-confirm" element={<SellCarConfirm />} />
        <Route path="/finance-confirm" element={<FinanceConfirm />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/test-drive" element={<TestDrive />} />
        <Route path="/test-drive-form" element={<TestDriveF />} />
        <Route path="/test-drive-confirm" element={<TestDriveConfirm />} />
        <Route path="/car/:id" element={<Car />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/buy-now-form" element={<BuyNow />} />
        <Route path="/buy-now-confirm" element={<BuyNowConfirm />} />
        <Route path="/likes" element={<Liked />} />
      </Routes>
    </div>
  );
}

export default App;
