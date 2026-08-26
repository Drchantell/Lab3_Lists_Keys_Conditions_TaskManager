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
    <main className="min-h-screen bg-[#050505] px-4 py-8 text-pink-50 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <header className="mb-7 text-center">
          <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-pink-500 shadow-[0_0_18px_rgba(236,72,153,0.7)]" />
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
            Lab 3
          </p>
          <h1 className="font-serif text-3xl font-black italic tracking-tight text-pink-500 sm:text-4xl">
            Dr. McDowell's Task Manager
          </h1>
          <p className="mt-2 text-sm text-pink-200/80">
            Lists, Keys, and Conditionals
          </p>
        </header>

        <div className="mb-5 flex items-center justify-between rounded-2xl border border-pink-500/40 bg-black/50 px-4 py-3 text-sm text-pink-100 shadow-lg shadow-pink-500/10">
          <span className="font-semibold uppercase tracking-[0.2em] text-pink-300">
            Tasks
          </span>
          <span className="rounded-full bg-pink-500/20 px-2.5 py-1 text-pink-200">
            {filteredTasks.length} of {tasks.length}
          </span>
        </div>

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
