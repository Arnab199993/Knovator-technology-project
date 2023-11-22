import React, { createContext, useContext, useState } from "react";

const userContext = createContext(null);

export const useContextAPI = () => useContext(userContext);

const UserContextProvider = ({ children }) => {
  const [storeData, setStoreData] = useState([]);
  const [stars, setStars] = useState(["☆", "☆", "☆", "☆", "☆"]);
  const defaultState = {
    title: "",
    description: "",
    rating: "",
  };
  const [state, setState] = useState(defaultState);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    setStoreData([...storeData, state]);
    setState(defaultState);
  };

  const handleDelete = (index) => {
    const updatedStoreData = [...storeData];
    updatedStoreData.splice(index, 1);
    setStoreData(updatedStoreData);
  };

  return (
    <userContext.Provider
      value={{
        handleChange,
        handleSubmit,
        handleDelete,
        state,
        storeData,
        stars,
        setState,
        defaultState,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
