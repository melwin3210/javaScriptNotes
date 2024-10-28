
1. **Callback Queue**: The `setTimeout` function places its callback in the callback queue, which will only be executed once the call stack is empty, regardless of the delay set (even if it's 0ms).

2. **Minimum Delay**: The specified time in `setTimeout` is a minimum delay; the callback may be delayed further if the call stack is not empty. This means the execution can be paused until all currently executing tasks are completed.
