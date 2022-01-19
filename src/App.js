import React, { useState } from "react";
import Router from "./routes/Router";
import ToDoContext from "./context/ToDoContext";
import useToDo from "./utils/useToDo";

function App() {
  const { toDo, addToDo, updateToDo, deleteToDo } = useToDo();

  return (
    <ToDoContext.Provider
      value={{
        data: toDo,
        addToDo: addToDo,
        updateToDo: updateToDo,
        deleteToDo: deleteToDo,
      }}
    >
      <Router />
    </ToDoContext.Provider>
  );
}

export default App;
