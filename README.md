### CS572-Homework-08-LLM
 
Build an AI workflow using TypeScript and the OpenAI Response API that manages a user’s todos with date awareness and natural language date handling. Your workflow should automatically call functions based on user input.
Available Functions:
* `addTodo(dateInput: string, text: string): string` Add a todo for a specific date (supports `"today"`, `"tomorrow"`, or `"MM-DD-YYYY"`).
* `getTodos(dateInput: string): string[]` List all todos for a given date.

Requirements:
* Use in-memory storage to maintain todos organized by date.
* Detect user intent to add or list todos and call the correct function automatically.
* Accept both natural language dates ("today", "tomorrow") and explicit US format ("MM-DD-YYYY").
* Provide clear responses for each action (confirmation or list output).
* Handle invalid inputs gracefully (e.g., missing date or todo text).
* Support multiple consecutive interactions without losing in-memory context.
* UI not required. Test the implementation through the CLI.
  
  
