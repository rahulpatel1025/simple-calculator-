# 🧮 Calculator in Node.js

A simple calculator built in **Node.js** as part of my project-based learning journey.  
The calculator takes two numbers and an operator (`+`, `-`, `*`, `/`) as input, validates them, and outputs the result.

---

## 📌 Features
- Accepts two numbers from the user  
- Supports four basic operations: addition, subtraction, multiplication, division  
- Validates inputs (non-numeric values, empty operator, invalid operator)  
- Handles division by zero gracefully  

---

## 🛠️ Tech Stack
- **Language:** JavaScript (Node.js)  
- **Library:** [prompt-sync](https://www.npmjs.com/package/prompt-sync) (for terminal input)  

---

## 🚀 How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/rahulpatel025/calculator-node.git
   cd calculator-node
  ## Install dependencies: npm install prompt-sync
  ## Run the program: node basic.js

## 📖 How It Works

Get Numbers → prompts user for two valid numbers.

Get Operator → ensures input is one of +, -, *, /.

Switch Statement → performs the corresponding operation.

Validation → handles invalid inputs and division by zero.

Output → displays result in formatted style:

##🎯 Learning Outcomes

Through this project, I practiced:

Handling user input in Node.js using prompt-sync

Writing modular functions for clean and reusable code

Using loops for input validation

Applying switch-case for multiple operation handling

Implementing error handling (e.g., invalid input, division by zero)

Structuring a project with a clear README for documentation
