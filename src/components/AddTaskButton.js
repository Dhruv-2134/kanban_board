import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

function AddTaskButton({ addTask }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '') {
      console.log('Showing toast for empty fields'); // Debugging line
      toast.error('Title and description are required.', {
        duration: 3000,
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200'
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE'
        }
      });
      return;
    }

    const truncatedTitle = title.length > 5 ? title.substring(0, 5) : title;
    const truncatedDesc = description.length > 10 ? description.substring(0, 10) : description;

    addTask({ title: truncatedTitle, description: truncatedDesc });
    setTitle('');
    setDescription('');
    setIsFormOpen(false);
  };

  return (
    <div className="add-task-container">
      {!isFormOpen && (
        <button onClick={() => setIsFormOpen(true)} className="add-task-button">
          + Add New Task
        </button>
      )}
      {isFormOpen && (
        <form onSubmit={handleSubmit} className="add-task-form">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add Task</button>
          <button type="button" onClick={() => setIsFormOpen(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default AddTaskButton;
