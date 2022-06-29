import React, { useReducer, useEffect } from "react";
import reducer from "./reducer";
// context creation
// provider
// consumer
// useContext Hook
let API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "HTML",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = React.createContext();

// provider function
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          //   nbPages: data.nbPages,
        },
      });
      //   isLoading = false
    } catch (error) {
      console.log(error);
    }
  };

  //   remove the post
  const removePost = (post_Id) => {
    dispatch({
      type: "REMOVE_POST",
      payload: post_Id,
    });
  };

  //   search
  const searchPost = (searchQuery) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: searchQuery,
    });
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query]);
  return (
    <AppContext.Provider value={{ ...state, removePost, searchPost }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
