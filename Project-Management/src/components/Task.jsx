import { useState } from 'react';

export default function Task({ tasks, onUpdateTasks }) {
  const [newTask, setNewTask] = useState('');

  function handleAddTask(event) {
    event.preventDefault();
    if (newTask.trim() === '') return;

    onUpdateTasks([
      ...tasks, 
      { 
        id: Math.random(), 
        text: newTask, 
        completed: false 
      }
    ]);
    setNewTask('');
  }

  function handleToggleTask(taskId) {
    onUpdateTasks(
      tasks.map(task =>
        task.id === taskId 
          ? { ...task, completed: !task.completed } 
          : task
      )
    );
  }

  function handleDeleteTask(taskId) {
    onUpdateTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <section className="mt-8 md:mt-16">
      <div className="bg-stone-200 rounded-lg p-4 md:p-8 shadow-md">
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        
        {/* Add Task Form */}
        <form onSubmit={handleAddTask} className="mb-8 flex gap-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="w-full p-2 rounded-md border-2 border-stone-300 
              bg-stone-100 text-stone-600 
              focus:outline-none focus:border-stone-600
              transition-all duration-300"
            placeholder="Add a new task..."
          />
          <button
            className="bg-stone-700 text-stone-100 px-6 py-2 rounded-md
              hover:bg-stone-800 transition-all duration-300
              hover:scale-105 active:scale-95"
          >
            Add
          </button>
        </form>

        {/* Task List */}
        {tasks.length === 0 ? (
          <p className="text-stone-600 text-center italic">
            This project doesn't have any tasks yet.
          </p>
        ) : (
          <ul className="space-y-2">
            {tasks.map(task => (
              <li 
                key={task.id}
                className="flex items-center justify-between p-4 
                  bg-stone-100 rounded-lg group hover:bg-stone-50
                  transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleTask(task.id)}
                    className="w-5 h-5 accent-stone-600
                      transition-all duration-300 cursor-pointer"
                  />
                  <span className={`text-stone-600
                    ${task.completed ? 'line-through text-stone-400' : ''}`}>
                    {task.text}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="text-stone-400 hover:text-red-500
                    opacity-0 group-hover:opacity-100
                    transition-all duration-300"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}