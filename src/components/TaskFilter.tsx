import type {
  PriorityFilter,
  StatusFilter,
  TaskFilterProps,
} from '../types'

const statusOptions: { value: StatusFilter; label: string }[] = [
  { value: 'all', label: 'All Statuses' },
  { value: 'todo', label: 'To Do' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' },
]

const priorityOptions: { value: PriorityFilter; label: string }[] = [
  { value: 'all', label: 'All Priorities' },
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
]

export function TaskFilter({
  statusFilter,
  priorityFilter,
  onStatusFilterChange,
  onPriorityFilterChange,
}: TaskFilterProps) {
  return (
    <section className="mb-6 grid gap-4 rounded-3xl border border-pink-500/40 bg-[#111111]/90 p-5 sm:grid-cols-2">
      <label className="flex flex-col gap-2 text-sm font-bold text-pink-50">
        Filter by status
        <select
          aria-label="Filter by status"
          className="rounded-xl border border-pink-400/60 bg-[#1d1d1d] px-3 py-2 font-normal text-pink-50 outline-none transition focus:border-pink-500"
          value={statusFilter}
          onChange={(event) =>
            onStatusFilterChange(event.target.value as StatusFilter)
          }
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm font-bold text-pink-50">
        Filter by priority
        <select
          aria-label="Filter by priority"
          className="rounded-xl border border-pink-400/60 bg-[#1d1d1d] px-3 py-2 font-normal text-pink-50 outline-none transition focus:border-pink-500"
          value={priorityFilter}
          onChange={(event) =>
            onPriorityFilterChange(event.target.value as PriorityFilter)
          }
        >
          {priorityOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </section>
  )
}
