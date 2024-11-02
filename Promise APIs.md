### Promise APIs Overview

- **Promise.all**: Takes an array of promises as input and makes parallel API calls. If any promise is rejected, it throws an error, returning the same error as output.

- **Promise.allSettled**: Handles the success and failure of multiple promises. It waits for all promises to fulfill, collects all results, and returns them in an array of objects with status and value for both success and rejection.

- **Promise.race**: In a race between multiple promises, the first promise to settle (either resolve or reject) determines the result.

- **Promise.any**: Waits for the first successful promise to settle. If all promises fail, it returns an aggregated error.

- **Error Handling**: The aggregate errors in Promise APIs are returned as an array, allowing for a comprehensive understanding of failures.

- **Terminology**: Key terms include fulfilled, rejected, settled, success, and failure, which are essential for understanding promise behavior.

- some examples for each of the Promise APIs:

### 1. Promise.all
```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42; // A non-promise value
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 100, "foo"));

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // Output: [3, 42, "foo"]
  })
  .catch(error => {
    console.error(error); // If any promise rejects, this will execute
  });
```

### 2. Promise.allSettled
```javascript
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("Error!");
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, "foo"));

Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    console.log(results);
    // Output: 
    // [
    //   { status: "fulfilled", value: 3 },
    //   { status: "rejected", reason: "Error!" },
    //   { status: "fulfilled", value: "foo" }
    // ]
  });
```

### 3. Promise.race
```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "One"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "Two"));

Promise.race([promise1, promise2])
  .then(result => {
    console.log(result); // Output: "Two" (the first promise to settle)
  });
```

### 4. Promise.any
```javascript
const promise1 = Promise.reject("Error 1");
const promise2 = Promise.reject("Error 2");
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, "Success!"));

Promise.any([promise1, promise2, promise3])
  .then(result => {
    console.log(result); // Output: "Success!"
  })
  .catch(error => {
    console.error(error); // If all promises fail, this will execute
  });
```

### Error Handling Example with Promise.all
```javascript
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("Error!");

Promise.all([promise1, promise2])
  .then(values => {
    console.log(values); // This won't run because promise2 is rejected
  })
  .catch(error => {
    console.error(error); // Output: "Error!"
  });
```

### Error Handling Example with Promise.allSettled
```javascript
const promise1 = Promise.reject("Failed!");
const promise2 = Promise.resolve("Success!");

Promise.allSettled([promise1, promise2])
  .then(results => {
    console.log(results);
    // Output: 
    // [
    //   { status: "rejected", reason: "Failed!" },
    //   { status: "fulfilled", value: "Success!" }
    // ]
  });
```


