import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const completionPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="bg-[#222] mt-24 flex justify-center items-center text-gray-200">
      <div className="bg-[#333] p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-6">Task Overview</h1>

        <div className="mb-6">
          <p className="text-xl font-semibold mb-2">Total Tasks: {totalTasks}</p>
          <p className="text-xl mb-2">Completed Tasks: {completedTasks}</p>
          <p className="text-xl mb-6">Pending Tasks: {pendingTasks}</p>
        </div>

        {totalTasks > 0 ? (
          <div className="mb-6 relative flex justify-center items-center">
            {/* CircularProgress with Overlayed Text */}
            <Box position="relative" display="inline-flex">
              <CircularProgress
                variant="determinate"
                value={completionPercentage}
                sx={{ color: '#7ab69e' }}
                size={120}
              />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h6" component="div" color="white">
                  {`${Math.round(completionPercentage)}%`}
                </Typography>
              </Box>
            </Box>
          </div>
        ) : (
          <div className="mb-6 text-2xl font-semibold text-green-400">
            🎉 Wohoo! No tasks pending...
          </div>
        )}

        <div>
          <Link to="/all-tasks">
            <button
              className="bg-teal-500 text-white py-3 px-6 font-semibold text-lg rounded-full transition-colors duration-200 hover:bg-teal-600"
            >
              View All Tasks
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
