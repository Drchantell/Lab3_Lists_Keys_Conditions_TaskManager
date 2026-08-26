import type { TaskItemProps, TaskStatus } from '../types'

export function TaskItem({
  task,
  onStatusChange,
  onDelete,
}: TaskItemProps) {
  const isCompleted = task.status === 'completed'

  return (
    <article
      className={`flex flex-col justify-between gap-5 rounded-2xl border p-5 transition sm:flex-row ${
        isCompleted
          ? 'border-pink-400/70 bg-[#1d1016]'
          : 'border-pink-500/60 bg-[#111111]'
      }`}
    >
      <div>
        <h2 className="font-serif text-xl font-bold text-pink-50">{task.title}</h2>
        <p className="mt-2 text-sm text-pink-200/80">
          Priority: <strong className="capitalize text-pink-400">{task.priority}</strong>
        </p>

        {isCompleted ? (
          <p className="mt-4 font-semibold text-pink-300">Task completed!</p>
        ) : (
          <p className="mt-4 text-sm text-pink-200/70">This task still needs work.</p>
        )}
      </div>

      <div className="min-w-44 sm:self-start">
        <label className="flex flex-col gap-2 text-sm font-bold text-pink-50">
          Status
          <select
            className="rounded-xl border border-pink-400/60 bg-[#1d1d1d] px-3 py-2 font-normal text-pink-50 outline-none transition focus:border-pink-500"
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
          className="mt-3 w-full rounded-xl bg-pink-500 px-3 py-2 text-sm font-bold text-white transition hover:bg-pink-400"
          type="button"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </article>
  )
}
