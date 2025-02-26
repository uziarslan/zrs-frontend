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
      </Routes>
    </div>
  );
}

export default App;
