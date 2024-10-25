### Notes on Inner Functions and Closures

1. **Calling Inner Functions**: Inner functions can be invoked directly using two sets of parentheses, e.g., `()()`.
  
2. **Passing Parameters**: Parameters can be passed to inner functions when they are returned, allowing for flexible function calls.

3. **Encapsulation**: Closures enable data hiding and encapsulation, preventing external code from accessing certain values.

4. **Garbage Collection**: 
   - High-level programming languages typically have garbage collectors that automatically delete unused variables.
   - However, closures can hold onto memory that is not easily reclaimed, potentially leading to increased memory usage.

5. **Smart Garbage Collectors**: Some modern browsers have implemented smart garbage collectors that can identify and delete variables not used outside of closures.

This serves as a useful summary of inner functions and closures, highlighting their capabilities and limitations.
