import "./App.css";
import HomePage from "./Pages/HomePage";
import PantsPage from "./Pages/PantsPage";
import ShirtsPage from "./Pages/ShirtsPage";
import TShirtsPage from './Pages/TShirtsPage'
import SportsPage from './Pages/SportsPage'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shirts" element={<PantsPage />}></Route>
        <Route path="/pants" element={<ShirtsPage />}></Route>
        <Route path="/t-shirts" element={<TShirtsPage />}></Route>
        <Route path="/sports" element={<SportsPage />}></Route>
      </Routes>
    </div>
    // <div className="App">
    //   <HomePage />
    // </div>
  );
}

export default App;
