

1. **map()**: 
   - **Purpose**: Transforms each element of an array and returns a new array with the transformed values.
   - **Example**: 
     ```javascript
     const numbers = [1, 2, 3];
     const doubled = numbers.map(num => num * 2); // [2, 4, 6]
     ```

2. **filter()**:
   - **Purpose**: Creates a new array containing only the elements that pass a specified condition.
   - **Example**:
     ```javascript
     const numbers = [1, 2, 3, 4, 5];
     const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
     ```

3. **reduce()**:
   - **Purpose**: Reduces the array to a single value by executing a reducer function on each element, taking an accumulator and the current value as arguments.
   - **Example**:
     ```javascript
     const user = [
         { firstName: 'Alice', age: 28 },
         { firstName: 'Bob', age: 32 },
         { firstName: 'Charlie', age: 25 }
     ];

     const output = user.reduce(function(acc, curr) {
         if (curr.age < 30) {
             acc.push(curr.firstName);
         }
         return acc;
     }, []); // output: ['Alice', 'Charlie']
     ```

### Key Points on `reduce()`:
- **Arguments**:
  1. **Reducer Function**: This function takes two parameters:
     - **Accumulator**: The accumulated value returned from the previous iteration.
     - **Current Value**: The current element being processed in the array.
  2. **Initial Value**: The initial value of the accumulator, which can be an empty array, number, etc.

