### Understanding Blocks and Variable Scope in JavaScript

1. **What is a Block?**
   - Code inside curly brackets `{}` is called a **block**.

2. **Grouping Statements:**
   - Multiple statements can be grouped in a block, allowing them to be used where JavaScript expects a single statement, such as in `if`, `else`, loops, and functions.

3. **Block Scope:**
   - Variables declared with `let` and `const` are stored in a separate memory space within the block. This is why they are considered **block-scoped**.

4. **Variable Shadowing:**
   - **Shadowing** occurs when a variable declared inside a block has the same name as a variable in an outer scope. The inner variable "shadows" the outer one.

5. **Scope Rules:**
   - The shadowing variable must not exceed the scope of the original variable, or it will result in an error.

6. **Illegal Shadowing:**
   - Shadowing a `let` or `const` variable with `var` is illegal and will cause an error.

7. **Accessing Variables:**
   - A `var` variable declared in a block can be accessed outside of that block because it belongs to the nearest function or global scope. In contrast, `let` and `const` cannot be accessed outside their block.

### Summary
In JavaScript, blocks allow for grouping statements and control variable scope. Variables declared with `let` and `const` are block-scoped, while `var` has a wider scope. Shadowing can occur, but must respect scope rules to avoid errors.
