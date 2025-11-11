### CS572-Homework-08-LLM
*Note: For all questions, UI is not required, test your code implementation from the CLI.*
  
Create an agent using TypeScript and the OpenAI Response API that manages a user’s todos with date awareness and completion tracking. Your agent should call functions automatically based on user input.

Available Functions:
* `addTodo(dateInput: string, text: string): string` — Add a todo for a specific date (supports "today", "tomorrow", or "MM-DD-YYYY").
* `getTodos(dateInput: string): string[]` — List all todos for a given date.
* `removeTodo(text: string): string` — Remove a todo by exact text.
* `completeTodo(text: string): string` — Mark a todo as completed.
* `clearTodos(dateInput: string): string` — Remove all todos for a specific date.

Requirements:
* Use in-memory storage to keep todos organized by date.
* Detect user intent (add, list, remove, complete, clear) and call the appropriate function automatically.
* Accept natural language dates ("today", "tomorrow") or explicit US format ("MM-DD-YYYY").
* Provide clear responses for all actions (confirmation, errors, or list output).
* Handle invalid inputs gracefully.
* Support multiple consecutive interactions without losing context.
  

  
