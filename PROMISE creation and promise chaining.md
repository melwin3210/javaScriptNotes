

### Promises in JavaScript

1. **Creating a Promise**:
   - A promise is created using the `new Promise()` constructor.
   - The constructor takes a callback function with two parameters: `resolve` and `reject`.

2. **Resolving and Rejecting**:
   - A promise can only be resolved or rejected using the `resolve` and `reject` functions.
   - An error can be created using `new Error('error message')`.

3. **Handling Errors**:
   - The `.catch()` method attaches a failure callback that handles errors during the promise execution.
   - `.catch()` only handles errors from the preceding `.then()` calls. Errors from subsequent `.then()` calls will not be caught by this `.catch()`.

4. **Multiple `.catch()` Statements**:
   - You can have multiple `.catch()` methods to handle errors for specific parts of the promise chain, along with a general catch at the end.

5. **Returning Values in Promise Chains**:
   - Always return a value in the promise chain for the next `.then()` to utilize.
   - If a `.then()` returns a value, it becomes the input for the next `.then()`. If it returns a promise, the next `.then()` attaches to that promise.

### Example Breakdown

```javascript
const cart = ['shoes', 'pants', 'kurta'];

createOrder(cart)
  .then(function(orderId) {
    console.log(orderId);
    return orderId; // Pass orderId to the next then
  })
  .then(function(orderID) {
    return proceedToPayment(orderID) // Process payment
  })
  .then(function({ message, amt }) {
    console.log(message, 'of amount:', amt);
    return showOrderSummary(message, amt); // Show order summary
  })
  .then(function({ message, amt }) {
    console.log('Your wallet has been debited by:', amt);
  })
  .catch(function(err) {
    console.log(err.message); // Handle errors
  })
  .then(function() {
    console.log('No matter what happens, I will get executed'); // Final then
  });

function createOrder(cart) {
  return new Promise(function(resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error('Cart is not valid!');
      reject(err);
    }
    const orderId = '12345';
    setTimeout(function() {
      resolve(orderId); // Simulate async operation
    }, 5000);
  });
}

function proceedToPayment(orderID) {
  return new Promise(function(resolve) {
    resolve({ message: `Payment Successful for order id: ${orderID}`, amt: 2500 });
  });
}

function showOrderSummary(paymentInfo, amt) {
  return new Promise(function(resolve, reject) {
    if (amt >= 2000) {
      resolve({ message: `You have ordered items that cost ${amt} RS`, amt });
    } else {
      reject(new Error('Please buy more for discount'));
    }
  });
}

function validateCart(cart) {
  return true; // Simple validation
}
```

