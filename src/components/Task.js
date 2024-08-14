import React from 'react';
import { useDrag } from 'react-dnd';

function Task({ task }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div 
      ref={drag} 
      className={`task ${isDragging ? 'dragging' : ''}`}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
}

export default Task;