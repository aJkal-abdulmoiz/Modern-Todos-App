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
        backgroundColor: "#252a2f",
        padding: 6,
        borderRadius: 5,
        boxShadow: 6,
        width: "90%",  
        maxWidth: "100%", 
        margin: "15px auto",
        color: "#fff",
        overflow: "hidden",
        '@media (min-width: 960px)': {
          width: '45%',
        },
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
            backgroundColor: '#252a2f',
            marginBottom: 3,
            borderRadius: 2,
            color: "#fff", // Text color white
            '& .MuiInputBase-input': {
              color: '#fff', // Text input color white
            },
            '& .MuiInputLabel-root': {
              color: '#fff', // Label color white
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#fff', // Placeholder text color white
            },
            '& .MuiOutlinedInput-root': {
              borderColor: '#4b8e7f', // Teal border color
              '&:hover fieldset': {
                borderColor: '#57a392', // Hover border color
              },
              '&.Mui-focused fieldset': {
                borderColor: '#4b8e7f', // Focused border color
              },
              '.css-1ll44ll-MuiOutlinedInput-notchedOutline': {
                color: '#cfcfcf'
              }
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            padding: "5px 24px",
            fontSize: "18px",
            fontWeight: "bold",
            backgroundColor: "#4b8e7f",
            "&:hover": {
              backgroundColor: "#57a392",
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
