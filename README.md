 
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

### 🗓️ Day - 3: REST APIs and HTTP Methods

---

## 🌐 What are REST APIs?
- **REST (Representational State Transfer)** is a **type of API** that follows **specific rules and guidelines** for communication.
- It uses **HTTP methods** like:
  - `GET`
  - `POST`
  - `PUT`
  - `DELETE`
- It defines **fixed standards** for how requests and responses should be structured.

---

## 📨 Ways to Send Data in Requests

### 1. `req.body`
- Hidden in the request payload.
- Best for **larger**, **sensitive**, or **complex** data (like passwords).
- Typically used in `POST`, `PUT`, and `PATCH` requests.

### 2. `req.query`
- Data sent in the URL after `?` as key-value pairs.
- Ideal for **small**, **optional parameters**.
- Avoid using it for **sensitive or complex data**.
- Example:
  ```
  GET /search?gender=male&age=24
  ```

### 3. `req.params`
- Data sent as part of the API path.
- Commonly used for identifying **specific resources**.
- Example: 
  ```
  GET /user/ankur_bit_io
  ```
- Accessed in code as:
  ```js
  req.params.username
  ```

---

## 🧾 REST API Methods

| Method   | Purpose                                      |
|----------|----------------------------------------------|
| **GET**     | Retrieve data from the server.               |
| **POST**    | Send new data to the server (create).        |
| **PATCH**   | Update existing data on the server.          |
| **DELETE**  | Remove/delete data from the server.          |

---

💡 Example Use Case:  
A social media app like `x.com` may use:
- `req.params` to fetch user profiles (`/user/:username`)
- `req.query` to filter search results (`/search?gender=male`)
- `req.body` for login forms or post creation
Displaying D117.md.