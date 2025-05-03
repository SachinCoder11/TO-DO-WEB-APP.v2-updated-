![Screenshot 2025-05-03 222604](https://github.com/user-attachments/assets/a6b46e26-fd91-49d8-ab14-66d018b168a0)
**✅ To-Do App v2 – Updated**

🌐 **Live Demo**: [to-do-web-app-v2-updated.vercel.app](https://to-do-web-app-v2-updated.vercel.app)

🎥 **Screenshot**
![Uploading Screenshot 2025-05-03 222604.png…]

---

## 🧾 Overview

**To-Do App v2 (Updated)** is a sleek and responsive task manager built using **React**, **TypeScript**, and **Tailwind CSS**. It’s designed to provide a fast, minimal, and intuitive user experience for managing tasks, with improved code structure and local storage support.

---

## ✨ Features

- ✅ Add, delete, and manage tasks.
- 🧠 Built with TypeScript for strong typing.
- 🎯 Mark tasks as complete/incomplete.
- 🔍 Filter tasks (All, Completed, Incomplete).
- 💾 Persistent data with `localStorage`.
- 🎨 Modern and mobile-friendly UI via Tailwind CSS.
- 🧩 Modular components for scalability.

---

## 🧠 Tech Stack

| Category     | Technologies Used               |
|--------------|----------------------------------|
| Framework    | React (with TypeScript)         |
| Styling      | Tailwind CSS                    |
| State Mgmt   | useState, useEffect (React Core)|
| Hosting      | [Vercel](https://vercel.com)    |

---

## 📂 Folder Structure

```bash
src/
├── components/
│   ├── TaskItem.tsx         # Renders individual tasks
│   └── TaskList.tsx         # Displays task list
├── utils/
│   └── storage.ts           # localStorage helper functions
├── App.tsx                  # Main app component
├── index.tsx                # Entry point for React
├── types.ts                 # Custom TypeScript types
├── styles/
│   └── index.css            # Tailwind imports and custom CSS

# 1. Clone the repository
git clone https://github.com/yourusername/todo-app-v2.git

# 2. Navigate to the project directory
cd todo-app-v2

# 3. Install dependencies
npm install
# or
yarn install

# 4. Start the development server
npm run dev
# or
yarn dev
