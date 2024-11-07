In JavaScript, **event propagation** refers to the way events travel through the DOM (Document Object Model) when they're triggered. There are three phases of event propagation: **capturing**, **target**, and **bubbling**. Understanding these phases and how they interact with event listeners can help you control event handling and optimize the behavior of your web applications.

### Event Propagation Phases

1. **Capturing Phase**:
   - This is the first phase of event propagation, where the event starts from the **top-most ancestor** element (typically `document`) and travels **downward** through the DOM tree toward the target element.
   - During this phase, event listeners set to handle the event in **capturing** mode will be triggered.

2. **Target Phase**:
   - This phase occurs **when the event reaches the target element** — the element that was actually clicked, hovered over, or interacted with.
   - If an event listener is attached to this target element, it will be executed during this phase, **after** the capturing phase and **before** any bubbling events.

3. **Bubbling Phase**:
   - This phase happens after the event has reached the target element. The event then **bubbles up** from the target element back to the top-most ancestor (usually `document`), moving upward through the DOM.
   - Event listeners set to handle events in **bubbling** mode (the default) will be triggered during this phase.

### `addEventListener()` Syntax

The syntax for adding an event listener is:

```javascript
elem.addEventListener(event, callback, capture);
```

- **`event`**: The name of the event (e.g., `"click"`, `"keydown"`, etc.).
- **`callback`**: The function to run when the event is triggered.
- **`capture`** (optional): A boolean value that determines which phase the event listener should handle:
  - `false` (default): The event listener is executed during the **bubbling phase**.
  - `true`: The event listener is executed during the **capturing phase**.

#### Example: Capturing vs. Bubbling

```html
<!DOCTYPE html>
<html>
<body>

<div id="parent" style="width: 300px; height: 300px; background-color: lightblue;">
  Parent Element
  <div id="child" style="width: 100px; height: 100px; background-color: lightgreen;">
    Child Element
  </div>
</div>

<script>
  // Bubbling phase (default)
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent (Bubbling phase)");
  });

  document.getElementById("child").addEventListener("click", () => {
    console.log("Child (Bubbling phase)");
  });

  // Capturing phase
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent (Capturing phase)");
  }, true);  // true enables the capturing phase

  document.getElementById("child").addEventListener("click", () => {
    console.log("Child (Capturing phase)");
  }, true);
</script>

</body>
</html>
```

**Output** when clicking the `child` element:

```
Parent (Capturing phase)
Child (Capturing phase)
Child (Bubbling phase)
Parent (Bubbling phase)
```

- **Capturing phase** events are triggered first (from the top of the DOM down to the target).
- **Bubbling phase** events are triggered second (from the target back up to the top).

If the event listener is added in **bubbling** phase (default), the order is reversed. If you set `capture` to `true`, the listener will capture the event in the **capturing phase** first.

### `event.stopPropagation()`

The method `event.stopPropagation()` is used to **prevent the event from propagating further** in the DOM.

- In the **bubbling phase**, if you call `stopPropagation()` in the event handler, it will **stop the event from bubbling up** to parent elements.
- In the **capturing phase**, calling `stopPropagation()` prevents the event from reaching the target element or being passed further down the tree.

#### Example of `stopPropagation()`:

```html
<!DOCTYPE html>
<html>
<body>

<div id="parent" style="width: 300px; height: 300px; background-color: lightblue;">
  Parent Element
  <div id="child" style="width: 100px; height: 100px; background-color: lightgreen;">
    Child Element
  </div>
</div>

<script>
  // Bubbling phase event listener
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent (Bubbling phase)");
  });

  document.getElementById("child").addEventListener("click", (event) => {
    console.log("Child (Bubbling phase)");
    event.stopPropagation();  // Prevents bubbling up
  });

</script>

</body>
</html>
```

**Output** when clicking the `child` element:

```
Child (Bubbling phase)
```

- The `"Parent (Bubbling phase)"` log does **not appear** because `stopPropagation()` was called in the child element's event listener, preventing the event from bubbling up to the parent.

### Key Points:

- **Capturing Phase**: The event propagates from the root (`document`) down to the target element. If you set `capture: true` in `addEventListener()`, your event handler will trigger during this phase.
- **Bubbling Phase**: The event propagates from the target element back up to the root (`document`). This is the default behavior.
- **`stopPropagation()`**: This method prevents the event from continuing its propagation (either up in the bubbling phase or down in the capturing phase).

### Use Cases:
- **Capturing Phase (`capture: true`)**: Use this when you want to intercept the event before it reaches the target, for example, for custom event delegation or handling events on the root container.
- **Bubbling Phase (default)**: Most common use case, where you want to handle events after they have reached the target element. You can also catch events from child elements using event delegation.
- **`stopPropagation()`**: Useful when you want to **prevent other event listeners** from being triggered, especially in complex UIs where multiple event listeners might be attached to various elements.

By understanding these event phases and how propagation works, you can more precisely control how and when event listeners are triggered in your web applications.
