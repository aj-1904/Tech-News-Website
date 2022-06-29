import React, { useEffect } from "react";

function Stories() {
  let isLoading = true;

  let API = "http://hn.algolia.com/api/v1/search?query=html";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      //   isLoading = false
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <>
      <h2>My Tech News Post</h2>
    </>
  );
}

export default Stories;
