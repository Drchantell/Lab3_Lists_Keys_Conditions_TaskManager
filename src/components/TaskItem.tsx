import type { TaskItemProps, TaskStatus } from '../types'

export function TaskItem({
  task,
  onStatusChange,
  onDelete,
}: TaskItemProps) {
  const isCompleted = task.status === 'completed'

  return (
    <article className={`task-card ${isCompleted ? 'completed' : ''}`}>
      <div>
        <h2>{task.title}</h2>
        <p>
          Priority: <strong>{task.priority}</strong>
        </p>

        {isCompleted ? (
          <p className="message complete-message">Task completed!</p>
        ) : (
          <p className="message work-message">This task still needs work.</p>
        )}
      </div>

      <div className="task-actions">
        <label>
          Status
          <select
            value={task.status}
            onChange={(event) =>
              onStatusChange(task.id, event.target.value as TaskStatus)
            }
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>

        <button type="button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </article>
  )
}
