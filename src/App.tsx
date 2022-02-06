import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import ToDoList from "./components/TodoList";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
