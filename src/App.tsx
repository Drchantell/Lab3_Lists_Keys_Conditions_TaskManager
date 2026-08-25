import { useState } from 'react'
import { TaskFilter } from './components/TaskFilter'
import { TaskList } from './components/TaskList'
import type {
  PriorityFilter,
  StatusFilter,
  Task,
  TaskStatus,
} from './types'

const startingTasks: Task[] = [
  { id: 1, title: 'Finish React lesson', status: 'todo', priority: 'high' },
  { id: 2, title: 'Practice TypeScript', status: 'in-progress', priority: 'medium' },
  { id: 3, title: 'Review class notes', status: 'completed', priority: 'low' },
  { id: 4, title: 'Push project to GitHub', status: 'todo', priority: 'high' },
]

function App() {
  const [tasks, setTasks] = useState<Task[]>(startingTasks)
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>('all')

  const handleStatusChange = (id: number, status: TaskStatus) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    )
  }

  const handleDelete = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    )
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      statusFilter === 'all' || task.status === statusFilter

    const matchesPriority =
      priorityFilter === 'all' || task.priority === priorityFilter

    return matchesStatus && matchesPriority
  })

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-100 px-4 py-8 text-zinc-900 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <header className="mb-7 text-center">
          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-pink-500" />
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pink-600">
            Lab 3
          </p>
          <h1 className="font-serif text-3xl font-black italic tracking-tight text-pink-600 sm:text-4xl">
            Dr. McDowell's Task Manager
          </h1>
          <p className="mt-2 text-zinc-600">Lists, Keys, and Conditionals</p>
        </header>

        <TaskFilter
          statusFilter={statusFilter}
          priorityFilter={priorityFilter}
          onStatusFilterChange={setStatusFilter}
          onPriorityFilterChange={setPriorityFilter}
        />

        <TaskList
          tasks={filteredTasks}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      </div>
    </main>
  )
}

export default App
