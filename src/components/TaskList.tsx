import { TaskItem } from './TaskItem'
import type { TaskListProps } from '../types'

export function TaskList({
  tasks,
  onStatusChange,
  onDelete,
}: TaskListProps) {
  if (!tasks || tasks.length === 0) {
    return (
      <p
        aria-live="polite"
        className="rounded-3xl border border-dashed border-pink-500/60 bg-[#121212] p-6 text-center text-pink-200"
      >
        No tasks match the selected filters.
      </p>
    )
  }

  return (
    <section className="grid gap-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </section>
  )
}
