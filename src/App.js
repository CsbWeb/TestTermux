import React, { useState, useEffect } from "react";
import List from "./components/List";
import Form from "./components/Form";
import Modal from "./components/UI/Modal/Modal";
import axios from "axios";
import Loader from "./components/UI/Loader/Loader";
import FetchList from "./API/FetchList";
import useFetching from "./components/hooks/useFetching";
import "./styles.css";

function App() {
  const [list, setList] = useState([]);
  const [FetchData, isListLoad, postError] = useFetching(async () => {
    const items = await FetchList.getAll();
    setList(items);
  });
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    FetchData();
  }, []);

  function getForm(values) {
    setList([...list, values]);
  }

  function removeItem(item) {
    setList(list.filter((l) => l.id !== item.id));
  }

  async function FetchData() {
    // let limit = 10;
    // let page = 1;
    setIsListLoad(true);
    // setTotalCount(response.headers["x-total-count"]);
    // console.log(totalCount);
    setIsListLoad(false);
  }

  return (
    <div>
      <Modal func={<Form send={getForm} />} />
      <h1 style={{ textAlign: "center" }}>Первый список</h1>
      {isListLoad ? (
        <Loader />
      ) : list.length !== 0 ? (
        <List list={list} postRem={removeItem} />
      ) : (
        <h2 style={{ textAlign: "center" }}>Список пуст!</h2>
      )}
    </div>
  );
}

export default App;
