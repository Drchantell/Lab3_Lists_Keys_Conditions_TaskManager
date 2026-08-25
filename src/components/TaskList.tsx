import { TaskItem } from './TaskItem'
import type { TaskListProps } from '../types'

export function TaskList({
  tasks,
  onStatusChange,
  onDelete,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="rounded-3xl border border-dashed border-pink-300 bg-white/90 p-6 text-center text-pink-700 shadow-lg shadow-pink-100">
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
