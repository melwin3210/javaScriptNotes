

### Method Borrowing or Sharing in JavaScript

In JavaScript, `call`, `apply`, and `bind` are methods used to set the `this` context of a function and to control how arguments are passed. Here’s a closer look at each method:

#### 1. `call()`
- **Usage**: Calls a function with a specified `this` value and individual arguments.
- **Syntax**: `function.call(thisArg, arg1, arg2, ...)`
- **Example**:
  ```javascript
  function printFullName(city, state) {
      console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
  }

  const student = { firstName: "John", lastName: "Doe" };
  printFullName.call(student, "Jammu", "J&K"); // Output: John Doe from Jammu, J&K
  ```

#### 2. `apply()`
- **Usage**: Similar to `call`, but accepts an array of arguments instead of individual ones.
- **Syntax**: `function.apply(thisArg, [argsArray])`
- **Example**:
  ```javascript
  printFullName.apply(student, ["Jammu", "J&K"]); // Output: John Doe from Jammu, J&K
  ```

#### 3. `bind()`
- **Usage**: Returns a new function with a bound `this` value and optional initial arguments. The function can be invoked later.
- **Syntax**: `function.bind(thisArg, arg1, arg2, ...)`
- **Example**:
  ```javascript
  const printStudent = printFullName.bind(student, "Udhampur", "J&K");
  printStudent(); // Output: John Doe from Udhampur, J&K
  ```

### Key Differences
- **Immediate Invocation**: 
  - `call` and `apply` invoke the function immediately, while `bind` returns a new function that can be invoked later.
  
- **Argument Passing**: 
  - `call` takes arguments individually, while `apply` takes them as an array.

### Conclusion
These methods are powerful tools for managing function context in JavaScript, enabling flexible method borrowing and sharing. Understanding how and when to use them can greatly enhance your ability to write reusable and maintainable code.
