import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todo,
  deleteTask,
  toggleCompletion,
  setEditingTask,
}) => {
  return (
    <div className="space-y-4 p-11">
      {todo.length === 0 ? (
        <p className="text-center text-gray-500">Wohoo! No tasks Pending...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {todo.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              toggleCompletion={toggleCompletion}
              deleteTask={deleteTask}
              setEditingTask={setEditingTask}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
