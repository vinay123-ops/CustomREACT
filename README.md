# 🚀 Mini React - A Simple React Clone from Scratch

This is a **lightweight React clone** built from scratch to understand the internals of React. It includes:

✅ A **custom JSX-like function**  
✅ A **virtual DOM representation**  
✅ A **simple render function**  
✅ **Reconciliation and state updates**  

## ⚡ How It Works

Instead of directly manipulating the DOM, we:  
1️⃣ Use a **virtual DOM** (JSON-like structure) to represent UI.  
2️⃣ Implement a **custom render function** to create real DOM nodes.  
3️⃣ Use a **diffing algorithm** to update only the changed parts.  

## 🚀 Features
- **Virtual DOM creation** using `h` function  
- **Efficient rendering** with `render` function  
- **Component-based architecture**  
- **State updates** similar to React's `setState`  

---

## 📜 Code Implementation

### **1️⃣ Virtual DOM Representation**
We create an **h function** (like React’s `createElement`) to generate a JSON-like structure.

```js
function h(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;
  return { nodeName, attributes, children };
}
