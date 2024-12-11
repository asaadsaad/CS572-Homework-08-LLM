### CS572-Homework-08-LLM

#### Question 01
Create a function and use OpenAI API to convert a US address to specific parts as follows:
* Input: `1000 N 4th Street, Fairfield, IA 52556`
* Output: `{ "street": "1000 N 4th Street", "City": "Fairfield", "State": "IA", "Zipcode": "52556" }`

Note: You may use `readline` core module to read input from the console:
```typescript
import readline from "node:readline/promises";

const readline_interface = readline.createInterface({ input: process.stdin, output: process.stdout });
const user_answer = await readline_interface.question('What is your name?');
if (user_answer === 'exit') process.exit(0);
```
Alternatively, you may use [readline-sync](https://www.npmjs.com/package/readline-sync).

#### Question 02
Create API REST endpoints and use OpenAI API to implement the following:
* Proofread any text
* Make text Friendly
* Make text Professional
* Summarize text
* Extract Key points

#### Question 03
Use OpenAI API and [OpenWeatherMap API](https://openweathermap.org/api) to return the current weather status for the user at any given location.
  
Note: UI is optional (not required), but if you wish to implement, make sure you create a transitional waiting state until your backend server (and LLM) sends back the full response.
  
