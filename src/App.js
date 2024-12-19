import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Add Task Functionality
  const addTask = (text) => {
    if (text.trim() === "") {
      toast.error("Task text cannot be empty.");
      return;
    }

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    const updatedTasks = [newTask, ...tasks]; // Add the new task at the beginning
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    toast.success("New task added.");
  };

  // Edit Task Functionality
  const editTask = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setEditingTask(null); // Reset editing task after saving
    toast.success("Task updated.");
  };

  // Toggle Task Completion
  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    toast.success("Task status updated.");
  };

  // Delete Task Functionality
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    toast.success("Task deleted.");
  };

  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home tasks={tasks} />} />

        {/* Todo List with Todo Functionality */}
        <Route
          path="/all-tasks"
          element={
            <>
              <TodoForm
                addTask={addTask}
                editTask={editTask}
                editingTask={editingTask}
                setEditingTask={setEditingTask}
              />
              <TodoList
                todo={tasks}
                deleteTask={deleteTask}
                toggleCompletion={toggleCompletion}
                editTask={editTask}
                editingTask={editingTask}
                setEditingTask={setEditingTask}
              />
              <ToastContainer position="top-right" theme="dark" />
            </>
          }
        />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
