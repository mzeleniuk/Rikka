import React from "react";

import Header from "./header";
import "../styles/App.css";

const search = (searchValue: string) => {
  console.log(searchValue);
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Header search={search} text="Rikka" />
    </div>
  );
}

export default App;
