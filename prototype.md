### 🔍 What is **Prototype** in JavaScript?

In **JavaScript**, a **prototype** is a built-in mechanism that allows objects to inherit properties and methods from other objects.

---

### 📦 Every function in JavaScript has a `.prototype` property

When you use a constructor function to create objects, the new object gets access to the properties and methods defined on that constructor's prototype.

---

### 👨‍🏫 Think of it like this:

> "Every object has a hidden link to another object called its prototype. That prototype object may also have its own prototype, and so on — this is known as the **prototype chain**."

---

### 🔁 Example: Using a constructor function

```js
function Person(name) {
  this.name = name;
}

// Add a method to the prototype
Person.prototype.sayHello = function () {
  console.log("Hello, I'm " + this.name);
};

// Create object
const p1 = new Person("Melwin");

p1.sayHello(); // Hello, I'm Melwin
```

* `p1` does **not** have `sayHello` on itself.
* It finds it **up the prototype chain** on `Person.prototype`.

---

### 🧠 Under the Hood:

```js
console.log(p1.__proto__ === Person.prototype); // true
```

Each object created using `new Person()`:

* Inherits from `Person.prototype`.

---

### 🔗 Prototype Chain:

Imagine:

```js
p1 → Person.prototype → Object.prototype → null
```

Each step is a **link in the prototype chain**, used when trying to access a property or method.

---

### 💡 Even Objects Have Prototypes

```js
const obj = { name: "Melwin" };

console.log(obj.toString()); // Inherited from Object.prototype
```

* `obj` does not have `toString()` directly.
* It's inherited from `Object.prototype`.

---

### ✅ Why is `prototype` useful?

* **Reusability**: Share methods among all instances (memory efficient).
* **Inheritance**: Create parent-child object relationships.
* **Extendability**: Add new functionality to built-in types (e.g., add methods to `Array.prototype`).

---

### ⚠️ Be Careful:

Avoid modifying built-in prototypes (`Array.prototype`, `Object.prototype`, etc.) unless necessary, as it can cause conflicts in large applications.

---

### 🧪 Custom Example

```js
function Car(model) {
  this.model = model;
}

Car.prototype.drive = function () {
  console.log(this.model + " is driving");
};

const c1 = new Car("Tesla");
c1.drive(); // Tesla is driving
```

Here, `drive()` is shared by all `Car` instances via `Car.prototype`.


