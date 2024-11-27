import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { List, Box, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        } else {
          return { ...t };
        }
      })
    );
  };
  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { text: text, id: uuid(), completed: false }];
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        Todos
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              remove={() => removeTodo(todo.id)}
              toggle={() => toggleTodo(todo.id)}
            />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}
