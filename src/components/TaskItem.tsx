import type { TaskItemProps, TaskStatus } from '../types'

export function TaskItem({
  task,
  onStatusChange,
  onDelete,
}: TaskItemProps) {
  const isCompleted = task.status === 'completed'

  return (
    <article
      className={`flex flex-col justify-between gap-5 rounded-xl border-l-4 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row ${
        isCompleted
          ? 'border-emerald-500 bg-emerald-50/60'
          : 'border-pink-500'
      }`}
    >
      <div>
        <h2 className="text-xl font-bold text-violet-950">{task.title}</h2>
        <p className="mt-2 text-sm text-slate-600">
          Priority: <strong className="capitalize text-violet-900">{task.priority}</strong>
        </p>

        {isCompleted ? (
          <p className="mt-4 font-semibold text-emerald-700">Task completed!</p>
        ) : (
          <p className="mt-4 text-sm text-violet-700">This task still needs work.</p>
        )}
      </div>

      <div className="min-w-44 sm:self-start">
        <label className="flex flex-col gap-2 text-sm font-bold text-violet-950">
          Status
          <select
            className="rounded-lg border border-violet-200 bg-violet-50 px-3 py-2 font-normal text-slate-700 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
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

        <button
          className="mt-3 w-full rounded-lg bg-pink-600 px-3 py-2 text-sm font-bold text-white transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2"
          type="button"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </article>
  )
}
