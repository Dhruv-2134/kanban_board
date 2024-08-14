import React from 'react';
import { useDrop } from 'react-dnd';
import Task from './Task';

function Column({ title, tasks, moveTask }) {
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => moveTask(item.id, title),
  });

  return (
    <div ref={drop} className="column">
      <h2>{title}</h2>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Column;