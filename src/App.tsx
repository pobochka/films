import React from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Favourites from "./components/Favourites/Favourites";

const App = () => {
  return (
    <>
      <Header />

      <div className="favourites">
        <Favourites />
      </div>
      <main>
        <List />
      </main>
    </>
  );
};

export default App;
