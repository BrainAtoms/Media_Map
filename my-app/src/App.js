import './App.css';
import React, {useState} from "react";
import MainPage from "./components/MainPage";

function App() {
  const [page, setPage] = useState("MainPage")
  const handleClick = (newPage) => {
    setPage(newPage)
}
  return (
    <div className="App">
      <header className="header">
      <h1 className="title" onClick={() => handleClick("MainPage")}>ME-dia Map</h1>
      </header>
      {page === "MainPage" && <MainPage />}
    </div>
  );
}

export default App;
