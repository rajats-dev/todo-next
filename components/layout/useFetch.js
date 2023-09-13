import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../store/todo-slice";

const useFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/api/TodoDb")
      .then(async (res) => {
        const data = await res.json();
        dispatch(todoAction.retrieveTodo(data));
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [dispatch]);

  return <div></div>;
};

export default useFetch;
