import React, { useState } from "react";
import "./App.css";
import StartPage from "./pages/StartPage";
import KnockKnock from "./pages/KnockKnock";
import SkippingStones from "./pages/SkippingStones";

function App() {
  const [page, setPage] = useState("StartPage");

  const ChangePage = (newPage) => {
    console.log("ChangePage", newPage);
    setPage(newPage);
  };

  return (
    <div className="app__mainTheme">
      {page === "StartPage" && <StartPage change={ChangePage} />}
      {page === "KnockKnock" && <KnockKnock change={ChangePage} />}
      {page === "SkippingStones" && <SkippingStones change={ChangePage} />}
    </div>
  );
}

export default App;
