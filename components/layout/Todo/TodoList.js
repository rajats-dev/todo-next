import { todoAction } from "@/components/store/todo-slice";
import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const TodoList = (props) => {
  const dispatch = useDispatch();

  const updatedList = props.todolist.filter(
    (item) => item.taskComplete == false
  );

  return (
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
              }}
            >
              Done
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                dispatch(todoAction.deleteTodo(item.id));
              }}
            >
              Delete
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default TodoList;
