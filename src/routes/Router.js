import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoPage from "./ToDoPage/ToDoPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/context-todolist" element={<ToDoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
