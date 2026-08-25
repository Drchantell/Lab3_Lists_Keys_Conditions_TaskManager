import { TaskItem } from './TaskItem'
import type { TaskListProps } from '../types'

export function TaskList({
  tasks,
  onStatusChange,
  onDelete,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-violet-300 bg-white p-6 text-center text-violet-700 shadow-sm">
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
