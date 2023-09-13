import Header from "@/components/layout/Header";
import TodoForm from "@/components/layout/Todo/TodoForm";
import TodoList from "@/components/layout/Todo/TodoList";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <hr></hr>
      <TodoForm />
      <hr></hr>
      <TodoList />
    </Fragment>
  );
}
