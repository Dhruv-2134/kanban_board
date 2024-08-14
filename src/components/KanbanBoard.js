import React from "react";
import Column from "./Column";

const columns = ["To Do", "In Progress", "Peer Review", "Done"];

function KanbanBoard({ tasks, moveTask }) {
  return (
    <div className="kanban-board">
      {columns.map((column) => (
        <Column
          key={column}
          title={column}
          tasks={tasks.filter((task) => task.status === column)}
          moveTask={moveTask}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;
