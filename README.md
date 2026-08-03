### CS572-Homework-LLM

Build an AI Agent using TypeScript and the OpenAI Response API that manages a user's todos using natural language.

**Available Functions**

* `addTodo(text: string, priority: string): string`
  Add a todo with a priority (`high`, `medium`, or `low`).

* `getTodos(priority?: string): string[]`
  List todos. If a priority is provided, return todos matching that priority.

**Requirements**
* Use in-memory storage to maintain todos.
* Each todo should contain `text` and `priority`.
* Detect user intent to add or list todos and call the correct function automatically.
* Extract todo information from natural language requests.
* Provide clear responses for each action (confirmation or list output).
* Handle invalid inputs gracefully.
* Support multiple consecutive interactions without losing in-memory context.
* Test the implementation through the CLI.

### Optional Requirements
* Create an Express web server and expose API endpoints for the todo agent logic.
* Create an Angular interface to interact with the API.
