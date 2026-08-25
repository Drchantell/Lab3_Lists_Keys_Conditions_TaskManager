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
    <main className="app">
      <div className="container">
        <header>
          <h1>Dr. McDowell's Task Manger</h1>
          <p>Lab 3: Lists, Keys, and Conditionals</p>
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
