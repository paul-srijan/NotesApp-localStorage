
# 📝 Notes App (with LocalStorage)

A simple **Notes App** built using **HTML, CSS, and JavaScript**.  
This app stores notes in the browser using **LocalStorage**, so they **persist even after refresh or browser restart**.  

---

## 🚀 Features
- ➕ **Add Notes** – Write and save notes instantly.  
- ✏️ **Edit Notes** – Update any existing note.  
- ❌ **Delete Notes** – Remove individual notes.  
- 🗑️ **Clear All Notes** – Remove all notes at once.  
- 💾 **Persistent Storage** – Notes stay saved using `localStorage`.  

---

## 📂 Project Structure
```

notes-app/
│── index.html   # Main HTML file
│── style.css    # Styling for the app
│── script.js    # JavaScript logic (CRUD operations with LocalStorage)
│── README.md    # Project documentation

```

---

## ⚙️ How It Works
1. Notes are stored in **LocalStorage** as a JSON array.  
2. On page load, notes are retrieved and displayed.  
3. You can **Add, Edit, Delete**, or **Clear All** notes.  
4. Data stays even after refresh, unless cleared.  

---

## 🖥️ Demo (Usage)
1. Open the app in your browser.  
2. Type a note in the input field and click **Add Note**.  
3. Use:
   - ✏️ **Edit** button to update a note.  
   - ❌ **X** button to delete a note.  
   - 🗑️ **Clear All Notes** button to reset all notes.  

---

## 🛠️ Technologies Used
- **HTML5** – Structure  
- **CSS3** – Styling  
- **JavaScript (ES6)** – Logic + LocalStorage  

---

## 📸 Screenshot
*(Add a screenshot of your app here – for example, `screenshot.png`)*  

---

## 🔮 Future Enhancements
- ✅ Add **search notes** feature  
- ✅ Add **dark mode**  
- ✅ Sync notes across devices (using backend or cloud storage)  
- ✅ Use **IndexedDB** for larger notes or files  

---


## 👨‍💻 Author
Developed by **Srijan Paul** 🚀  

---


# 📌 What is Local Storage?

**Local Storage** is a type of **web storage** provided by the browser that lets you save data **directly inside the user’s browser**.

* Data is stored as **key–value pairs**.
* Stored data **doesn’t disappear** when you refresh the page or close the browser.
* The data stays until you explicitly delete it.

---

# 📌 Types of Web Storage

1. **localStorage**

   * Stores data permanently (until deleted).
   * Example: Good for saving notes, themes, user preferences.

2. **sessionStorage**

   * Stores data only for the current browser tab.
   * Data is lost when you close the tab.

---

# 📌 Features of Local Storage

* Size limit: \~5MB (per domain, varies by browser).
* Stores **strings only** (you need `JSON.stringify()` and `JSON.parse()` for objects/arrays).
* Same-origin policy → only the same website can access its data.
* Synchronous API (runs immediately, not async like databases).

---

# 📌 Local Storage Methods

### 1. **Save data**

```js
localStorage.setItem("name", "Srijan");
```

✅ Saves the key `"name"` with value `"Srijan"`.

---

### 2. **Retrieve data**

```js
let username = localStorage.getItem("name");
console.log(username); // "Srijan"
```

---

### 3. **Remove a specific item**

```js
localStorage.removeItem("name");
```

---

### 4. **Clear all data**

```js
localStorage.clear();
```

---

### 5. **Check how many items are stored**

```js
console.log(localStorage.length);
```

---

# 📌 Example: Storing Notes

Since LocalStorage only stores strings, we use **JSON** for objects/arrays.

```js
let notes = ["Note 1", "Note 2"];

// Save
localStorage.setItem("notes", JSON.stringify(notes));

// Retrieve
let storedNotes = JSON.parse(localStorage.getItem("notes"));
console.log(storedNotes); // ["Note 1", "Note 2"]
```

---

# 📌 Where is LocalStorage data stored?

* In your **browser**, tied to the specific website (domain).
* You can view it:

  1. Open browser → **Right click → Inspect → Application tab → Local Storage**
  2. You’ll see all key–value pairs saved by that site.

---

# 📌 Real-World Use Cases

1. **Notes App** (like the one you’re building).
2. **Theme/Mode** (dark mode vs light mode).

   ```js
   localStorage.setItem("theme", "dark");
   ```
3. **Save login state** (not secure for passwords, but good for "remember me").
4. **Shopping cart** (save items until checkout).
5. **Form data autosave** (keep what user typed if page refreshes).

---

# 📌 Limitations of Local Storage

❌ Cannot store large amounts of data (use IndexedDB for that).
❌ Not encrypted → don’t store sensitive info (like passwords).
❌ Blocking/synchronous → too many operations can slow the page.

---

✅ In summary:

* **localStorage = browser’s built-in mini-database**.
* Stores data as **strings**.
* Data **persists** even after refresh/closing browser.
* Use **JSON.stringify & JSON.parse** for objects/arrays.
* Great for small apps like **notes, preferences, carts**.

---


# 📌 **Local Storage vs Session Storage vs Cookies**

| Feature          | **Local Storage**                                                   | **Session Storage**                                                | **Cookies**                                                                  |
| ---------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| **Data Storage** | Key–value pairs (string only)                                       | Key–value pairs (string only)                                      | Key–value pairs (string only)                                                |
| **Size Limit**   | \~5MB per domain                                                    | \~5MB per domain                                                   | \~4KB only                                                                   |
| **Lifetime**     | Stays **until deleted** by user or code                             | Stays **only for current tab/session** (gone when tab closed)      | Can be set to expire (minutes, days, years)                                  |
| **Scope**        | Available in **all tabs/windows** of the same domain                | Available **only in one tab**                                      | Available in all tabs/windows (domain-based)                                 |
| **Access**       | Only via JavaScript (client-side)                                   | Only via JavaScript (client-side)                                  | Accessible by **JavaScript + server (HTTP headers)**                         |
| **Use Cases**    | - Saving notes<br>- User preferences (dark mode)<br>- Shopping cart | - Temporary data<br>- One-time forms<br>- Preventing reload issues | - Authentication tokens<br>- Remember me login<br>- Tracking (ads/analytics) |
| **Security**     | Not sent to server, but accessible via JS (so XSS vulnerable)       | Same as localStorage (not sent to server)                          | Sent with every request to the server (can be `HttpOnly` and `Secure`)       |
| **Performance**  | Faster (data stays on browser only)                                 | Faster (browser-only, short-lived)                                 | Slower (attached to every HTTP request/response)                             |
| **Expiration**   | Manual clear only                                                   | Auto clear when tab closed                                         | Expiry set by server or JS                                                   |

---

# 📌 **Quick Examples**

### 🔹 Local Storage

```js
localStorage.setItem("theme", "dark"); 
console.log(localStorage.getItem("theme")); // "dark"
```

👉 Good for **permanent preferences** like theme, notes, cart.

---

### 🔹 Session Storage

```js
sessionStorage.setItem("user", "Srijan"); 
console.log(sessionStorage.getItem("user")); // "Srijan"
// Closes tab → data gone
```

👉 Good for **temporary form data**.

---

### 🔹 Cookies

```js
document.cookie = "username=Srijan; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
console.log(document.cookie);
```

👉 Good for **authentication/session management** because server can read them.

---

# 📌 **In Short**

* **Local Storage** → Large, persistent, client-only.
* **Session Storage** → Temporary, per-tab, client-only.
* **Cookies** → Small, persistent (if set), shared with **server + client**.

---

👉 If you’re building your **Notes App**, the **best choice is Local Storage**, because:
✅ You want notes to stay after refresh/close.
✅ You don’t need server communication.


---

## 📌 What is JSON?

**JSON** stands for **JavaScript Object Notation**.
It’s a lightweight format for storing and exchanging data.

👉 Think of JSON as a **universal way to represent data** (like objects, arrays, numbers, strings) in **text form** that can be understood by different programming languages.

---

## 📌 Example of JSON

```json
{
  "name": "Srijan",
  "age": 21,
  "isStudent": true,
  "skills": ["Python", "JavaScript", "C++"],
  "address": {
    "city": "Kolkata",
    "country": "India"
  }
}
```

### 🔎 Breakdown:

* `"name": "Srijan"` → key–value pair (string)
* `"age": 21` → number
* `"isStudent": true` → boolean
* `"skills": ["Python", "JavaScript", "C++"]` → array
* `"address": {...}` → nested object

---

## 📌 JSON vs JavaScript Object

JavaScript Object:

```js
let person = {
  name: "Srijan",
  age: 21
};
```

JSON (notice keys and string values must be in **double quotes**):

```json
{
  "name": "Srijan",
  "age": 21
}
```

👉 JSON is just a **string representation** of a JavaScript object.

---

## 📌 Why do we need JSON?

1. **Data exchange between server & browser**

   * When you fetch data from an API, it usually comes in JSON format.
   * Example: Weather API response

     ```json
     {
       "temperature": 28,
       "city": "Delhi"
     }
     ```

2. **Storing data**

   * LocalStorage only stores strings → JSON helps convert arrays/objects into strings.

3. **Language-independent**

   * JSON works with almost every language (Python, Java, C#, PHP, etc.).

---

## 📌 JSON in JavaScript

### 1. **Convert Object → JSON String**

```js
let person = { name: "Srijan", age: 21 };
let jsonString = JSON.stringify(person);
console.log(jsonString);
// Output: '{"name":"Srijan","age":21}' (a string)
```

### 2. **Convert JSON String → Object**

```js
let jsonString = '{"name":"Srijan","age":21}';
let person = JSON.parse(jsonString);
console.log(person.name); // Srijan
```

---

## 📌 Quick Analogy

Imagine JSON like a **text-based container**:

* You put your objects/arrays inside it.
* You can ship it anywhere (server, local storage, APIs).
* Later, you **unpack it** back into objects/arrays using `JSON.parse`.

---

✅ In summary:

* **JSON = lightweight data format**.
* **JSON.stringify()** → object → string.
* **JSON.parse()** → string → object/array.
* Used in **APIs, storage, and communication**.

