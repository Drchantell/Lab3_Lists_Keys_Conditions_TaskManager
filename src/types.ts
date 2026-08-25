export type TaskStatus = 'todo' | 'in-progress' | 'completed'
export type TaskPriority = 'low' | 'medium' | 'high'
export type StatusFilter = TaskStatus | 'all'
export type PriorityFilter = TaskPriority | 'all'

export interface Task {
  id: number
  title: string
  status: TaskStatus
  priority: TaskPriority
}

export interface TaskItemProps {
  task: Task
  onStatusChange: (id: number, status: TaskStatus) => void
  onDelete: (id: number) => void
}

export interface TaskListProps {
  tasks: Task[]
  onStatusChange: (id: number, status: TaskStatus) => void
  onDelete: (id: number) => void
}

export interface TaskFilterProps {
  statusFilter: StatusFilter
  priorityFilter: PriorityFilter
  onStatusFilterChange: (value: StatusFilter) => void
  onPriorityFilterChange: (value: PriorityFilter) => void
}
