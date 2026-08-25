import type {
  PriorityFilter,
  StatusFilter,
  TaskFilterProps,
} from '../types'

export function TaskFilter({
  statusFilter,
  priorityFilter,
  onStatusFilterChange,
  onPriorityFilterChange,
}: TaskFilterProps) {
  return (
    <section className="mb-6 grid gap-4 rounded-xl border border-violet-200 bg-white p-5 shadow-sm sm:grid-cols-2">
      <label className="flex flex-col gap-2 text-sm font-bold text-violet-950">
        Filter by status
        <select
          className="rounded-lg border border-violet-200 bg-violet-50 px-3 py-2 font-normal text-slate-700 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
          value={statusFilter}
          onChange={(event) =>
            onStatusFilterChange(event.target.value as StatusFilter)
          }
        >
          <option value="all">All Statuses</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm font-bold text-violet-950">
        Filter by priority
        <select
          className="rounded-lg border border-violet-200 bg-violet-50 px-3 py-2 font-normal text-slate-700 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
          value={priorityFilter}
          onChange={(event) =>
            onPriorityFilterChange(event.target.value as PriorityFilter)
          }
        >
          <option value="all">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
    </section>
  )
}
