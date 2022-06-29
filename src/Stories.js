import React from "react";
import { useContext } from "react";
import { AppContext } from "./context";

function Stories() {
  const { hits, isLoading } = useContext(AppContext);
  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <>
      <h2>My Tech News Post</h2>
      {hits.map((curPost) => {
        return <h2>{curPost.title}</h2>;
      })}
    </>
  );
}

export default Stories;
