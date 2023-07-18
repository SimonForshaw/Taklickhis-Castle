import React, { useState } from "react";
import "./App.css";
import StartPage from "./pages/StartPage";
import KnockKnock from "./pages/KnockKnock";

function App() {
  const [page, setPage] = useState("StartPage");

  const ChangePage = (newPage) => {
    console.log("ChangePage", newPage);
    setPage(newPage);
  };

  return (
    <div>
      {page === "StartPage" && <StartPage change={ChangePage} />}
      {page === "KnockKnock" && <KnockKnock change={ChangePage} />}
    </div>
  );
}

export default App;
