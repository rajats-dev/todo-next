import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Task = () => {
  const todolist = useSelector((state) => state.todo.todoItem);
  const updatedList = todolist.filter((item) => item.taskComplete == true);

  return (
    <div>
      <h2 style={{ margin: "2rem 5rem 5rem 5rem" }}>Completed Task</h2>
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
          </Row>
        ))}
      </div>
    </div>
  );
};

export default Task;
