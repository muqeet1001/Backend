 
# 🌐 Node.js Notes

## 1. **What is Node.js?**
- A **JavaScript runtime environment**.
- Allows running JavaScript **outside the browser** (e.g., on servers).
- **Built on Chrome’s V8 JavaScript Engine**.
- Enables building fast, scalable network applications.

---

## 2. **Who Created Node.js and Why?**
- **Created by**: Ryan Dahl  
- **Released in**: 2009 (initial work started in 2007)
- **Reason**:
  - Traditional servers like **Apache** handled concurrent requests inefficiently.
  - Node.js was designed for **non-blocking**, event-driven, real-time applications.

---

## 3. **Installing Node.js**
- Download from [https://nodejs.org](https://nodejs.org)
- Choose:
  - **LTS (Long Term Support)**: Stable version recommended for most users.
  - **Current**: Latest features but less stable.

---
# ⚡ Node.js Architecture (Quick Revision)

## 🔹 What is Node.js?
- JS runtime built on **V8 Engine**.
- Single-threaded, event-driven, non-blocking I/O.

## 🔹 Core Components
- **V8 Engine** → Runs JavaScript.
- **Libuv** → Event Loop + Thread Pool.
- **Event Queue** → Stores client requests.
- **Event Loop** → Processes requests.
- **Thread Pool** → Handles async tasks (File I/O, DB, crypto).

## 🔹 How it Works
1. Client sends request → goes to **Event Queue**.
2. **Event Loop** picks request.
3. If **Blocking (Sync)** → runs on main thread (others wait).
4. If **Non-Blocking (Async)** → sent to thread pool / OS.
5. When done, result goes back via callback/promise.
6. Response sent to client.

## 🔹 Blocking vs Non-Blocking
- **Sync (Blocking)** → Line by line, waits. ❌ Bad for servers.
- **Async (Non-Blocking)** → Doesn’t wait, continues. ✅ Best for scalable apps.

## 🔹 When to Use
✅ I/O heavy apps (web servers, APIs, chat apps, streaming).  
❌ Not for CPU-heavy tasks (AI training, video processing).  

## 🔹 Rule of Thumb
- Always prefer **Asynchronous (Non-Blocking)** in Node.js servers.
- Use Blocking only for **small scripts / initialization**.


## 4. **Running JavaScript Files with Node**
- Use the terminal/command prompt:
  ```bash
  node filename.js
  ```
- Node provides its own runtime environment with built-in **APIs** like:
  - `fs` (file system)
  - `http` (server creation)
  - `path`, etc.

---

## 5. **Packages in Node.js**
- **Packages** are reusable libraries or tools.
- Installed using **npm (Node Package Manager)**.
- Example:
  ```bash
  npm install cat-me
  ```

---

## 6. **Packages vs Modules**
| Feature     | Package                           | Module                        |
|-------------|-----------------------------------|-------------------------------|
| Definition  | Third-party tools/libraries       | Built-in features in Node.js |
| Source      | Installed via `npm`               | Comes with Node.js            |
| Examples    | `express`, `cat-me`               | `http`, `fs`, `path`          |

---

## 7. **Installing and Using a Package (e.g., cat-me)**
- **Installation**:
  ```bash
  npm install cat-me
  ```
- **Usage** in your code:
  ```js
  const catMe = require("cat-me");
  console.log(catMe());
  ```

---

## 8. **HTTP Module in Node.js**
- Built-in module to **create servers**.
- No installation required.
- Enables handling **HTTP requests and responses**.

---

## 9. **Creating a Simple Server with HTTP Module**
```js
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello from Node.js server!");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
 
```
### 🗓️ Day - 2: Express and APIs in Node.js


## ❌ Why We Don’t Use HTTP Module Directly
- Verbose and repetitive.
- No routing, middleware, or extra features.
- Hard to manage large applications.

---

## 🚀 Introduction to Express
- Lightweight, fast Node.js framework.
- Simplifies server creation and routing.

---

## 🛠️ Create a Server Using Express
```bash
npm install express
```
```js
const express = require('express');
const app = express();
```

---

## 📡 Express Creates the Server But Doesn’t Start It
- `express()` creates an instance of the app.
- The server doesn't listen until you call `app.listen()`.

---

## ▶️ Start the Express Server
```js
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

## ❗ Make the First Request
- Visit `http://localhost:PORT/`
- No API defined yet → shows **Cannot GET /**

---

## 🧠 Explanation of APIs in Express
- Define routes using:
```js
app.get(path, callback);
```
- Each route handles a specific HTTP request.

---

## 📍 Create a `/` API
```js
app.get('/', (req, res) => res.send('Hello World'));
```

---

## 📥 What is `req` (Request)?
- Object containing client request data:
  - URL
  - Headers
  - Query parameters
  - Body data, etc.

---

## 📤 What is `res` (Response)?
- Object used to send data back to client.
- Common methods:
  - `res.send()`
  - `res.json()`
  - `res.status()`

---

## 🔗 What is an API?
- **API (Application Programming Interface)**: A way for two apps to **communicate**.
- Allows one software to request data or services from another.
- Flexible in communication structure (no strict format).

---

## 🌐 What are REST APIs?
- **REST** = Representational State Transfer.
- A set of **rules** for designing APIs.
- Uses HTTP methods:
  - `GET`, `POST`, `PUT`, `DELETE`
- Follows standard request/response structures.

---

## REST API and Best Practices

### 1. Introduction to REST API
- REST (Representational State Transfer) is a set of best practices for building web APIs.
- Works on **client-server architecture**: client sends requests, server returns responses.
- Server and client are **independent**; server provides raw data, client decides how to render it.

### 2. Client-Server Communication
- Client sends a **request**.
- Server sends a **response**.
- Response can be **text, HTML, image, or JSON**, depending on client.
- For browsers, HTML (server-side rendering) is fine.
- For other clients (mobile apps, Alexa, React apps), **JSON** is preferred.

### 3. Server-side vs Client-side Rendering
- **Server-side rendering:** Server generates HTML and sends it to the client. Fast for browsers.
- **Client-side rendering:** Server sends JSON; client renders data. Slower but cross-platform.

### 4. Respect HTTP Methods
- Use methods properly:
  - **GET** → Fetch data
  - **POST** → Create data
  - **PATCH/PUT** → Update data
  - **DELETE** → Remove data
- Avoid misusing POST for all operations.

### 5. Best Practices
- Maintain **client-server separation**.
- Send **raw JSON** for non-browser clients.
- Follow **HTTP method conventions** for CRUD.
- Server-side HTML rendering is okay **only if the client is a browser**.

### 6. Conclusion
- Following REST best practices ensures **clean, maintainable, platform-independent APIs**.
- Upcoming videos will show **hands-on coding with Express.js** and projects using these standards.

**Key takeaway:** REST APIs should maintain **client-server independence**, send raw JSON when needed, and respect HTTP methods for scalable and efficient APIs.


## 📨 Ways to Send Data in Requests

### 1. `req.body`
- Sent in body of request.
- Used in `POST`, `PUT`, `PATCH`.
- Example: Form data or JSON.

### 2. `req.query`
- Data in URL after `?` as key-value pairs.
- Mostly used in `GET`.
- Example:
  ```
  GET /search?city=delhi&limit=10
  ```

### 3. `req.params`
- Data in URL path.
- Example:
  ```
  GET /user/ankur_bit_io
  ```
- Accessed as:
  ```js
  req.params.username
  ```

---

## 🔄 Request-Response Lifecycle
1. **Client sends a request** to server
2. **Server receives** the request
3. **Route handler matches** the request
4. **Processes** the request
5. **Sends back a response** to client
6. **Client receives** the response

---
# Express.js Middleware 🚀

## 1. What is Middleware? (Basic Level)

👉 Middleware is just a **function in Express** that runs **between the
request and the response**.

-   Imagine you enter a **shopping mall**:
    -   At the entrance, a **security guard** checks your bag.\
    -   Then you go to a shop, buy something.\
    -   Before leaving, another guard checks the bill.

Here:\
- **You** = client request\
- **Shops** = routes\
- **Security guards** = middleware (they check things before you reach
the final shop/route).

![Middleware Example](./middleware.png)

------------------------------------------------------------------------

## 2. First Simple Middleware Example

``` js
const express = require("express");
const app = express();

// Custom middleware
function logger(req, res, next) {
  console.log("Request received at:", new Date().toISOString());
  next(); // pass to next step
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page 🏠");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

------------------------------------------------------------------------

## 3. Types of Middleware (Intermediate Level)

### (a) Application-Level Middleware

Runs on **every request**.

``` js
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
```

### (b) Route-Level Middleware

Runs only on specific routes.

``` js
function isLoggedIn(req, res, next) {
  let loggedIn = false;
  if (loggedIn) next();
  else res.send("❌ Please log in first!");
}

app.get("/dashboard", isLoggedIn, (req, res) => {
  res.send("Welcome to your Dashboard ✅");
});
```

### (c) Built-in Middleware

-   `express.json()` → parses JSON body\
-   `express.urlencoded()` → parses form data\
-   `express.static()` → serves static files

``` js
app.use(express.json()); 
```

### (d) Error-Handling Middleware

Special middleware with **4 parameters** `(err, req, res, next)`.

``` js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke! 🚨");
});
```

------------------------------------------------------------------------

## 4. Real-Life Advanced Example (Banking App)

1.  Logger → Logs transaction requests\
2.  Authentication → Checks if user is logged in\
3.  Validator → Ensures valid amount\
4.  Route → Processes transaction\
5.  Error Handler → Handles errors

``` js
// 1. Logger
function logger(req, res, next) {
  console.log("Transaction Request:", req.method, req.url);
  next();
}

// 2. Authentication
function auth(req, res, next) {
  const loggedIn = true; 
  if (loggedIn) next();
  else res.status(401).send("Unauthorized ❌");
}

// 3. Validator
function validateAmount(req, res, next) {
  if (req.body.amount > 0) next();
  else res.status(400).send("Invalid Amount 🚫");
}

app.use(express.json());
app.use(logger);

app.post("/transfer", auth, validateAmount, (req, res) => {
  res.send(`✅ Transfer of $${req.body.amount} successful!`);
});

// 4. Error Handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).send("Server Error ⚠️");
});
```

------------------------------------------------------------------------

## 5. Summary

-   **Basic**: Middleware = function with `req, res, next`.\
-   **Intermediate**: Application-level, Route-level, Built-in,
    Error-handling.\
-   **Advanced**: Used for security, logging, validation,
    authentication, error handling, etc.

✅ In short: Middleware is like **checkpoints** between request and
response.
