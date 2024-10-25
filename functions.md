1. **Function Statement**:
   - A function defined using the `function` keyword followed by a name. 
   - Supports hoisting, meaning you can call the function before its definition in the code.
   - **Example**:
     ```javascript
     function xyz() {
         console.log("Function Statement");
     }
     ```

2. **Function Expression**:
   - A function that is assigned to a variable. 
   - Does not support hoisting; the function cannot be called before its definition.
   - **Example**:
     ```javascript
     var a = function() {
         console.log("Function Expression");
     };
     ```

3. **Anonymous Function**:
   - A function that does not have a name. 
   - Often used as a callback or passed as an argument.
   - **Example**:
     ```javascript
     var anon = function() {
         console.log("Anonymous Function");
     };
     ```

4. **Named Function Expression**:
   - A function expression that has a name, which can be useful for recursion or debugging.
   - **Example**:
     ```javascript
     var a = function xyz() {
         console.log("Named Function Expression");
     };
     ```

5. **Parameters vs. Arguments**:
   - **Parameters**: Variables defined in the function declaration. They act as placeholders.
     - **Example**:
       ```javascript
       function ab(param1, param2) {
           console.log(param1, param2);
       }
       ```
   - **Arguments**: Values passed to the function when it is called.
     - **Example**:
       ```javascript
       ab(4, 5); // Here, 4 and 5 are arguments.
       ```

6. **First-Class Functions**:
   - Functions in JavaScript are treated as first-class citizens, meaning they can:
     - Be assigned to variables.
     - Be passed as arguments to other functions.
     - Be returned from other functions.
   - **Example**:
     ```javascript
     var b = function(param) {
         return function xyz() {
             console.log("First Class Function");
         };
     };
     ```

7. **Functions as First-Class Citizens**:
   - Functions are fundamental to JavaScript because they can be stored in variables, passed as arguments, and returned from other functions. This flexibility allows for powerful programming patterns like callbacks, closures, and higher-order functions.

These points highlight the versatility of functions in JavaScript and how they contribute to the language's functional programming capabilities. Great job summarizing!
