**EXCECUTION CONTEXT**

When you run JavaScript code, it creates something called an **execution context**. Think of it like a little workspace for the code. This workspace has two main steps:

1. **Memory Allocation Phase:**
   - First, the code sets up space for variables and functions.
   - For variables, they get initialized to `undefined` (basically saying, “I exist, but I don’t have a value yet”).
   - For functions, the entire function is stored so it’s ready to be used later.

2. **Code Execution Phase:**
   - Next, the actual code starts running. This is where:
     - Variables are assigned their real values.
     - If a function is called, a new workspace is created for that function.
   - This means each time a function is invoked, it gets its own little workspace to work in.

### Clean-Up
When everything in a workspace is done running, that context gets popped off the stack. It’s like cleaning up after finishing a task so you can move on to the next one.

### Quick Summary
- You create a workspace (execution context).
- **Step 1:** Set up memory for variables and functions.
- **Step 2:** Run the code, assign values, and create new workspaces for functions as needed.
- Once finished, the workspace is cleared away.

This way, JavaScript keeps things organized and can handle multiple tasks at once without getting confused!
