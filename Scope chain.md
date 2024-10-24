### Understanding Variable Scope and Lexical Environment in JavaScript

1. **Variable Scope:** 
   - The scope of a variable depends on its **lexical environment** (where it was defined).

2. **Lexical Environment Creation:**
   - Whenever a new execution context is created (like when a function is called), a **lexical environment** is also created. This includes local memory for that context and a reference to its parent's lexical environment.

3. **Accessing Parent Variables:**
   - A function can access variables and functions defined in its parent’s lexical environment. This allows nested functions to use variables from their enclosing scopes.

4. **Variable Lookup Process:**
   - When you reference a variable, JavaScript first looks in the current local memory. 
   - If it’s not found, it checks the parent’s lexical environment, and continues up the chain until it either finds the variable or reaches the top (where there are no more environments).

5. **Scope Chain:**
   - This searching process is called the **scope chain**. If a variable isn’t found in any of the linked environments, it means that variable is not available in that scope.

### Summary
In JavaScript, the scope of a variable is determined by where it’s defined. Each time a new execution context is created, it forms a new lexical environment that can access its parent’s variables. The search for variables follows a chain (scope chain) up through the environments until the variable is found or none are left.
