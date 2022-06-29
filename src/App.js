import React from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import Stories from "./Stories";
import { useContext } from "react";
import { AppContext } from "./context";

function App() {
  const data = useContext(AppContext);
  return (
    <>
      <div>Welcome to Tech News Website!! {data}</div>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;
