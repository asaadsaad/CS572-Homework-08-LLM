interface Todo {
  text: string;
  priority: string;
}

const todos: Todo[] = [];

function addTodo(text: string, priority: string): string {
  if (!text.trim()) {
    return "Todo text cannot be empty.";
  }

  todos.push({
    text: text.trim(),
    priority: priority.trim().toLowerCase(),
  });

  return `Added ${priority} priority todo: "${text}".`;
}

function getTodos(priority?: string): string[] {
  let result = todos;

  if (priority) {
    result = todos.filter(
      todo => todo.priority === priority.toLowerCase()
    );
  }

  if (result.length === 0) {
    return ["No todos found."];
  }

  return result.map(
    (todo, index) =>
      `${index + 1}. [${todo.priority}] ${todo.text}`
  );
}

export { addTodo, getTodos };
