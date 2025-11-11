type Todo = {
  text: string;
  date: string; // MM-DD-YYYY
  completed: boolean;
};

const todos: Todo[] = [];

function formatDate(date: Date): string {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${mm}-${dd}-${yyyy}`;
}

function parseDate(input: string): string | null {
  const lower = input.toLowerCase();
  const today = new Date();
  if (lower === "today") return formatDate(today);
  if (lower === "tomorrow") {
    const t = new Date(today);
    t.setDate(today.getDate() + 1);
    return formatDate(t);
  }
  const regex = /^(0[1-9]|1[0-2])-([0-2][0-9]|3[01])-\d{4}$/;
  return regex.test(input) ? input : null;
}

function addTodo(dateInput: string, text: string): string {
  const date = parseDate(dateInput);
  if (!date) return "Invalid date. Use MM-DD-YYYY, 'today', or 'tomorrow'.";
  if (!text) return "Todo text is required.";
  todos.push({ text, date, completed: false });
  return `Added todo for ${date}: "${text}"`;
}

function getTodos(dateInput: string): string[] {
  const date = parseDate(dateInput);
  if (!date) return ["Invalid date. Use MM-DD-YYYY, 'today', or 'tomorrow'."];
  const list = todos
    .filter((t) => t.date === date)
    .map((t) => `${t.completed ? "[x]" : "[ ]"} ${t.text}`);
  return list.length ? list : [`No todos for ${date}`];
}

function removeTodo(text: string): string {
  const index = todos.findIndex((t) => t.text === text);
  if (index === -1) return `Todo "${text}" not found.`;
  todos.splice(index, 1);
  return `Removed todo: "${text}"`;
}

function clearTodos(dateInput: string): string {
  const date = parseDate(dateInput);
  if (!date) return "Invalid date. Use MM-DD-YYYY, 'today', or 'tomorrow'.";
  const initialLength = todos.length;
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].date === date) todos.splice(i, 1);
  }
  const removed = initialLength - todos.length;
  return removed ? `Cleared ${removed} todos for ${date}` : `No todos to clear for ${date}`;
}

function completeTodo(text: string): string {
  const todo = todos.find((t) => t.text === text);
  if (!todo) return `Todo "${text}" not found.`;
  todo.completed = true;
  return `Marked todo as complete: "${text}"`;
}

console.log(addTodo("today", "Finish homework"));
console.log(addTodo("tomorrow", "Walk the dog"));
console.log(addTodo("11-12-2025", "Call friend"));
console.log(getTodos("today"));
console.log(completeTodo("Walk the dog"));
console.log(getTodos("tomorrow"));
console.log(removeTodo("Call friend"));
console.log(getTodos("11-12-2025"));
console.log(clearTodos("today"));
console.log(getTodos("today"));
