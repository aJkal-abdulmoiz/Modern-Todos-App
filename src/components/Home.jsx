import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Congratulate from './Congratulate';
import CongratsText from './CongratsText';

function Home({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const completionPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  const recentTasks = tasks.slice(0, 3); // Show only the top 3 recent tasks

  return (
    <div
    
      className="max-h-screen  flex items-center justify-center text-gray-200"
      style={{
        background: '#222',
        overflow: 'hidden', 
      }}
      
    >
       {pendingTasks === 0 && <Congratulate /> } 
       
      <div className="bg-[#252a2f] p-8 rounded-2xl  shadow-2xl w-full max-w-5xl backdrop-blur-lg mt-3">
        {/* Task Overview Container */}
        { pendingTasks === 0 && <CongratsText/>}
        <div className="flex flex-col md:flex-row items-center justify-between gap-20 ">
          {/* Circular Progress Section */}
        
          <div className="flex justify-center items-center">
           
            <Box position="relative" display="inline-flex">
              <CircularProgress
                variant="determinate"
                value={completionPercentage}
                sx={{ color: '#4b8e7f' }}
                size={140}
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
                <Typography variant="h6" component="div" color="#E0E0E0" fontWeight="bold">
                  {`${Math.round(completionPercentage)}%`}
                </Typography>
              </Box>
            </Box>
          </div>

          {/* Task Stats Section */}
          <div className="flex-1 grid grid-cols-3 gap-4 text-center">
            <div className="bg-[#2A2F35] p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-white mb-2">{totalTasks}</h3>
              <p className="text-gray-400">Total Tasks</p>
            </div>
            <div className="bg-[#2A2F35] p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-500 mb-2">{completedTasks}</h3>
              <p className="text-gray-400">Completed</p>
            </div>
            <div className="bg-[#2A2F35] p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">{pendingTasks}</h3>
              <p className="text-gray-400">Pending</p>
            </div>
          </div>
        </div>

        {/* Recent Tasks Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-100">Recent Tasks</h2>
          {recentTasks.length > 0 ? (
            <ul className="space-y-3">
              {recentTasks.map((task, index) => (
                <li
                  key={index}
                  className="bg-[#2A2F35] p-4 rounded-lg shadow-md flex justify-between items-center hover:bg-[#353A40] transition-all duration-300"
                >
                  <span className="text-lg text-gray-300">{task.text}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      task.completed ? 'bg-green-600' : 'bg-yellow-600'
                    } text-gray-200`}
                  >
                    {task.completed ? 'Completed' : 'Pending'}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-400"> 🎉 Wohoo! No tasks pending...</p>
          )}
        </div>

        {/* Button */}
        <div className="text-center mt-8">
          <Link to="/all-tasks">
            <button
              className="bg-[#4b8e7f] text-white py-3 px-8 font-semibold rounded-full hover:bg-[#57a392] transition-all duration-300 shadow-lg"
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
