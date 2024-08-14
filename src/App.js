import React, { useState, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toaster } from 'react-hot-toast';
import KanbanBoard from './components/KanbanBoard';
import SearchBar from './components/SearchBar';
import AddTaskButton from './components/AddTaskButton';
import Lottie from "lottie-react";
import Kanban_Board from "./assets/Kanban_Board_Animation.json";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), status: 'To Do' }]);
  };

  const moveTask = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const kanban_animation = useRef()

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bgimage"></div>
      <div className="App">
        <Toaster/>
        <div className="heading">
          <h1>Kanban Board</h1>
          <Lottie lottieRef={kanban_animation} animationData={Kanban_Board} className='animation'/>
        </div>
        <SearchBar setSearchTerm={setSearchTerm} />
        <KanbanBoard tasks={filteredTasks} moveTask={moveTask} />
        <AddTaskButton addTask={addTask} />
      </div>
    </DndProvider>
  );
}

export default App;