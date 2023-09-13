import { todoAction } from "@/components/store/todo-slice";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const dispatch = useDispatch();
  const taskInputRef = useRef();
  const descInputRef = useRef();

  const onSumbitHandler = (e) => {
    e.preventDefault();
    const task = taskInputRef.current.value;
    const description = descInputRef.current.value;

    let obj = {
      task: task,
      description: description,
      id: Math.random().toString(),
      taskComplete: false,
    };

    dispatch(todoAction.addTodo(obj));
    fetch("/api/TodoDb", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Form
      onSubmit={onSumbitHandler}
      className="containers"
      style={{ width: "50%", margin: "auto" }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Task Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Task" ref={taskInputRef} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="Text"
          placeholder="Enter Description"
          ref={descInputRef}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default TodoForm;
