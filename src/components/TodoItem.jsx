import React from "react";
import { Button, Checkbox } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ task, toggleCompletion, deleteTask, setEditingTask }) => {
  const handleToggle = () => {
    toggleCompletion(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    setEditingTask(task);
  };

  return (
    <div
      className={`bg-[#252a2f] overflow-hidden rounded-xl shadow-md p-4 flex flex-col justify-start items-start w-full mb-4 ${task.completed ? "bg-opacity-10 bg-gray-600" : "bg-[#252a2f]"}`}
    >
      <div className="flex items-center justify-between w-full h-20 ">
        <div>
          <p className={`text-lg ${task.completed ? "line-through text-gray-500" : "text-white"}`}>{task.text}</p>
        </div>
        <Checkbox
          checked={task.completed}
          onChange={handleToggle}
          sx={{
            color: task.completed ? '#4caf50' : '#ccc',
            '&.Mui-checked': {
              color: '#4caf50',
            },
          }}
        />
      </div>

      <div className="border-t-2 border-gray-300 w-full mt-4" />

      <div className="flex space-x-3 mt-4">
        <Button
          variant="contained"
          color="primary"
          onClick={handleEdit}
          sx={{
            backgroundColor: "#4b8e7f", 
            '&:hover': {
              backgroundColor: "#57a392",
            },
            padding: "8px 16px",
          }}
          className="flex items-center space-x-2"
        >
          <EditIcon />
          <span>Edit</span>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDelete}
          sx={{ 
            backgroundColor: "#d32f2f", 
            '&:hover': {
              backgroundColor: "#c62828",
            },
            padding: "8px 16px",
          }}
          className="flex items-center space-x-2"
        >
          <DeleteIcon />
          <span>Delete</span>
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
