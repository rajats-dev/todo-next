import Header from "@/components/layout/Header";
import TodoForm from "@/components/layout/Todo/TodoForm";
import TodoList from "@/components/layout/Todo/TodoList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

export default function Home(props) {
  return (
    <Fragment>
      <Header />
      <hr></hr>
      <TodoForm />
      <hr></hr>
      <TodoList todolist={props.todolist} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://rajat-user:rajatsundriyal@cluster0.zfkoszx.mongodb.net/alltask?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("alltask");
  const result = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      todolist: result.map((item) => ({
        task: item.task,
        description: item.description,
        _id: item._id.toString(),
        taskComplete: item.taskComplete,
        id: item.id,
      })),
    },
  };
}
