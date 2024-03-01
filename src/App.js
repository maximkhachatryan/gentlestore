import "./App.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { ProductListPage } from "./Pages/ProductListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pants" element={<ProductListPage productType={1} />}></Route>
        <Route path="/shirts" element={<ProductListPage productType={2} />}></Route>
        <Route path="/t-shirts" element={<ProductListPage productType={3} />}></Route>
        <Route path="/sports" element={<ProductListPage productType={4} />}></Route>
      </Routes>
    </div>
    // <div className="App">
    //   <HomePage />
    // </div>
  );
}

export default App;
