function normalizeDate(dateInput: string): string {
  const today = new Date()
  const lower = dateInput.trim().toLowerCase()

  if (lower === "today") return formatDate(today)

  if (lower === "tomorrow") {
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    return formatDate(tomorrow)
  }

  if (/^\d{2}-\d{2}-\d{4}$/.test(lower)) return lower

  throw new Error("Invalid date format. Use 'today', 'tomorrow', or 'MM-DD-YYYY'.")
}

function formatDate(date: Date): string {
  const mm = String(date.getMonth() + 1).padStart(2, "0")
  const dd = String(date.getDate()).padStart(2, "0")
  const yyyy = date.getFullYear()
  return `${mm}-${dd}-${yyyy}`
}

const todos: Record<string, string[]> = {}

function addTodo(dateInput: string, text: string): string {
  const date = normalizeDate(dateInput)
  const todoText = text.trim()
  if (!todoText) return "Todo text cannot be empty."

  if (!todos[date]) todos[date] = []
  todos[date].push(todoText)

  return `Added todo for ${date}: "${todoText}".`
}

function getTodos(dateInput: string): string[] {
  const date = normalizeDate(dateInput)
  if (!todos[date] || todos[date].length === 0) {
    return [`No todos found for ${date}.`]
  }
  return todos[date].map((t, i) => `${i + 1}. ${t}`)
}

export { addTodo, getTodos, normalizeDate, formatDate }
