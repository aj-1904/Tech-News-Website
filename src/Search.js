import React, { useContext } from "react";
import { AppContext } from "./context";

function Search() {
  const { query, searchPost } = useContext(AppContext);
  return (
    <div>
      <h1>Tech News Website</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
