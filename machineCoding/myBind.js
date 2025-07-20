// Step 1: An object with first and last name
let nameObj = {
    firstName: 'Melwin',
    lastName: 'Fernandez'
};

// Step 2: A regular function that logs full name + address details
let printName = function(homeTown, state, country) {
    console.log(
        this.firstName + " " + this.lastName + " " + homeTown + " " + state + " " + country
    );
};

// Step 3: Using the native bind method (just for comparison)
let printMyName = printName.bind(nameObj, "Mahe"); // Bind `nameObj` as `this`, and pre-fill "Mahe"
printMyName("Puducherry", "India"); // Remaining args passed now

// Output:
// Melwin Fernandez Mahe Puducherry India

// ---------------------------
// Custom Implementation of bind
// ---------------------------

/**
 * Custom bind implementation (named `myBind`)
 * Attaches a function to a specific `this` context, and allows pre-filling arguments
 */
Function.prototype.myBind = function (...args) {
    // `this` refers to the function on which `myBind` is called (e.g., printName)
    let originalFunction = this;

    // The first argument is the object to bind as `this` (e.g., nameObj)
    let context = args[0];

    // Remaining arguments (after the first) are partially applied (pre-filled) arguments
    let preFilledArgs = args.slice(1); // e.g., ["Mahe"]

    // Return a new function that can receive the rest of the arguments later
    return function (...newArgs) {
        // Inside this returned function:
        // - We use `apply` to call original function with combined args
        // - Set `this` as the provided context (e.g., nameObj)
        // - Combine pre-filled args with new args provided when function is called

        originalFunction.apply(context, [...preFilledArgs, ...newArgs]);

        // Equivalent to:
        // printName.apply(nameObj, ["Mahe", "Puducherry", "India"]);
    };
};

// Step 4: Use our custom `myBind` function
let printMyName2 = printName.myBind(nameObj, "Mahe"); // Pre-fill "Mahe" as homeTown
printMyName2("Puducherry", "India"); // Provide the rest: state and country

// Output:
// Melwin Fernandez Mahe Puducherry India
