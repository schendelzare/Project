import React, { useState } from "react";

export const ContextData = React.createContext({
  data: null,
  selectedData: null,
  myListData: [],
  fetchData: () => {},
  fetchDetails: () => {},
  fetchMyList: () => {},
  removeFromMyList: () => {},
});

const DataContextProvider = ({ children }) => {
  const [value, setValue] = useState(null);
  const [selectedValue, setselectedValue] = useState(null);
  const [myList, setMyList] = useState([]);

  function fetchDataHanlder(data) {
    setValue(data);
  }
  function fetchSelectedDataHandler(data) {
    setselectedValue(data);
  }
  function fetchDataMyListHandler(data) {
    setMyList((prev) => [...prev, data]);
  }
  function removeFromMyListHandler(data) {
    setMyList((prev) => prev.filter((item) => item !== data));
  }

  const contextValue = {
    data: value,
    selectedData: selectedValue,
    myListData: myList,
    fetchData: fetchDataHanlder,
    fetchDetails: fetchSelectedDataHandler,
    fetchMyList: fetchDataMyListHandler,
    removeFromMyList: removeFromMyListHandler,
  };

  return (
    <ContextData.Provider value={contextValue}>{children}</ContextData.Provider>
  );
};

export default DataContextProvider;
