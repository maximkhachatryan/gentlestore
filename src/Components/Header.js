import React from "react";
import SearchBar from "./SearchBar";
import Navbar from './NavBar'

export default function App() {
  let styles = {
    backgroundColor: "#985412",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  

  return (
    <div>
      <div style={styles}>
        <SearchBar />
      </div>
      <Navbar />
    </div>
  );
}
