import { todoAction } from "@/components/store/todo-slice";
import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../useFetch";

const TodoList = () => {
  const dispatch = useDispatch();
  const todolist = useSelector((state) => state.todo.todoItem);

  useFetch();

  const updatedList = todolist.filter((item) => item.taskComplete == false);
  console.log(updatedList);

  const onDeleteHandler = (id) => {
    fetch("/api/TodoDb", {
      method: "DELETE",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onUpdateHandler = (id) => {
    fetch("/api/TodoDb", {
      method: "PUT",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <h2 style={{ margin: "2rem 5rem 5rem 5rem" }}>InComplete Task</h2>
      <div className="container" style={{ width: "50%", margin: "auto" }}>
        <Row className="container">
          <Col md={3}>Task</Col>
          <Col>Description</Col>
        </Row>
        {updatedList.map((item) => (
          <Row key={item.id}>
            <Col md={8}>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col md={5}>{item.task}</Col>
                    <Col md={5}>{item.description}</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <Button
                variant="success"
                onClick={() => {
                  dispatch(todoAction.updateTaskStatus(item));
                  onUpdateHandler(item._id);
                }}
              >
                Done
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(todoAction.deleteTodo(item.id));
                  onDeleteHandler(item._id);
                }}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </div>
    </>
  );
};

export default TodoList;
