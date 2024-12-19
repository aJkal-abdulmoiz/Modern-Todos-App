import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const TodoForm = ({ addTask, editTask, editingTask, setEditingTask }) => {
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTaskText(editingTask.text);
    } else {
      setTaskText("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      editTask(editingTask.id, taskText);
    } else {
      addTask(taskText);
    }
    setTaskText("");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#333",
        padding: 6,
        borderRadius: 5,
        boxShadow: 6,
        maxWidth: "500px",
        margin: "15px auto",
        color: "#fff",
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 4 }}>
        {editingTask ? "Edit Your Task" : "Add a New Task"}
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label={editingTask ? "Edit task..." : "Enter a task..."}
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          variant="outlined"
          fullWidth
          size="small"
          sx={{
            marginBottom: 3,
            backgroundColor: "#fff",
            borderRadius: 2,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            padding: "14px 24px",
            fontSize: "18px",
            fontWeight: "bold",
            backgroundColor: "#4b8e7f",
            "&:hover": {
              backgroundColor: "#4b8e7f",
            },
          }}
        >
          {editingTask ? "Update Task" : "Add Task"}
        </Button>
      </form>
    </Box>
  );
};

export default TodoForm;
