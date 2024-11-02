### Notes on Promises and Async/Await

**Promise:**
- A promise is a guarantee that a certain task will be completed in the future.
- It represents a value that may be available now, or in the future, or never.
- You can handle the outcome of the promise using:
  - `.then()`: for successful completion.
  - `.catch()`: for handling errors.

**Analogy:**
- Like receiving a receipt at a restaurant after placing an order, indicating your meal will be ready soon.
- You can either wait for your food or check on it later.

---

**Async/Await:**
- Async/await is a way to work with promises that makes your code easier to read and write.
- You can tell an async function to do something and move on to other tasks without waiting for it to finish.
- When you use `await`, it pauses the execution of the async function until the promise resolves.

**Analogy:**
- Similar to asking a friend to pick up your food while you go order a drink. Your friend handles the food while you take care of other things.

---

### Summary:
- **Promises** manage asynchronous operations and their outcomes.
- **Async/await** simplifies working with promises, allowing for non-blocking code execution while still handling async tasks sequentially.
