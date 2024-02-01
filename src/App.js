import "./App.css";
import HomePage from "./Pages/HomePage";
import ProdPage from "./Pages/ProdPage";
import ContactUs from "./Pages/ContactUsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProdPage />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </div>
    // <div className="App">
    //   <HomePage />
    // </div>
  );
}

export default App;
